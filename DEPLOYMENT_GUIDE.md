# TalkTechToMe - GCP Cloud Run & GoDaddy Deployment Guide

This guide walks you through deploying **TalkTechToMe** (`talktechtome.co.uk`) to **Google Cloud Run** and configuring your **GoDaddy DNS records**.

---

## Architecture Overview
- **Frontend App**: React 19 + TypeScript + Vite + Tailwind CSS.
- **Container Runtime**: Multi-stage Docker container with Nginx on Alpine Linux.
- **Host**: Google Cloud Run (Fully managed serverless container, auto-scales down to 0 to save costs).
- **Domain**: `talktechtome.co.uk` (Registered at GoDaddy).
- **Inquiries Destination**: `danielmurphy02830@gmail.com`.

---

## Option A: Direct 1-Command Deployment via Google Cloud Shell (Fastest)

If you don't have `gcloud` installed locally on Windows, the fastest way is using Google Cloud Shell directly in your browser:

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Click the **Activate Cloud Shell** icon (`>_`) in the top-right navbar.
3. In Cloud Shell, clone your repository:
   ```bash
   git clone https://github.com/danielmurphy02830/TalkTechToMe.git
   cd TalkTechToMe
   ```
4. Deploy directly from source to Cloud Run with one command:
   ```bash
   gcloud run deploy talktechtome \
     --source . \
     --platform managed \
     --region europe-west2 \
     --allow-unauthenticated \
     --port 8080 \
     --memory 256Mi \
     --min-instances 0 \
     --max-instances 5
   ```
   *(Note: You can change `--region` to your preferred GCP region like `us-central1` or `europe-west1` if you use another region for your other projects)*.
5. Cloud Build will automatically build the container and output your live Service URL (e.g. `https://talktechtome-xxxxxx-nw.a.run.app`).

---

## Option B: Automated Deployments via GitHub Actions

A preconfigured GitHub Actions workflow is located at `.github/workflows/deploy-cloudrun.yml`.

### Step 1: Create a Service Account in GCP
1. In Google Cloud Console, navigate to **IAM & Admin > Service Accounts**.
2. Click **Create Service Account**, name it `github-deployer`.
3. Grant the following roles:
   - **Cloud Run Admin** (`roles/run.admin`)
   - **Artifact Registry Writer** (`roles/artifactregistry.writer`)
   - **Service Account User** (`roles/iam.serviceAccountUser`)
4. Click on the created service account > **Keys** > **Add Key** > **Create new key (JSON)**. Download the JSON key file.

### Step 2: Add GitHub Repository Secrets
1. In your GitHub repository: `https://github.com/danielmurphy02830/TalkTechToMe/settings/secrets/actions`
2. Add the following repository secrets:
   - `GCP_PROJECT_ID`: Your Google Cloud project ID (e.g., `my-gcp-project-12345`).
   - `GCP_SA_KEY`: Paste the entire contents of the downloaded JSON key file.
3. Every push to the `main` branch will automatically build and deploy the latest version!

---

## Mapping Your GoDaddy Domain (`talktechtome.co.uk`)

Google Cloud Run provides built-in Custom Domain Mapping with **free, automatic SSL certificate provisioning**.

### Step 1: Add Custom Domain Mapping in Google Cloud Run
1. Go to **Google Cloud Console > Cloud Run**.
2. Click **Manage Custom Domains** (or select your service `talktechtome` and click **Add Custom Domain Mapping**).
3. Select your service: `talktechtome`.
4. Choose **Custom Domain** and enter:
   - `talktechtome.co.uk`
   - Also add `www.talktechtome.co.uk` (Cloud Run will prompt you to map both apex and www).
5. If you haven't verified domain ownership with Google yet:
   - Cloud Run will provide a **TXT record** (e.g., `google-site-verification=xxxxxxx`).
   - Leave this Cloud Console tab open while you update GoDaddy.

---

### Step 2: Update DNS Records in GoDaddy

1. Log in to [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio).
2. Find `talktechtome.co.uk` and click **DNS** (or **Manage DNS**).
3. Add or edit the records based on what Cloud Run provided:

| Type | Name / Host | Value / Data | TTL | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **TXT** | `@` | `google-site-verification=...` | 1 Hour / Default | *(Only needed once for Google domain verification)* |
| **A** | `@` | `216.239.32.21` | 1/2 Hour | Cloud Run Anycast IP 1 |
| **A** | `@` | `216.239.34.21` | 1/2 Hour | Cloud Run Anycast IP 2 |
| **A** | `@` | `216.239.36.21` | 1/2 Hour | Cloud Run Anycast IP 3 |
| **A** | `@` | `216.239.38.21` | 1/2 Hour | Cloud Run Anycast IP 4 |
| **AAAA** | `@` | `2001:4860:4802:32::15` | 1/2 Hour | (IPv6 - if provided by Cloud Run) |
| **AAAA** | `@` | `2001:4860:4802:34::15` | 1/2 Hour | (IPv6 - if provided by Cloud Run) |
| **AAAA** | `@` | `2001:4860:4802:36::15` | 1/2 Hour | (IPv6 - if provided by Cloud Run) |
| **AAAA** | `@` | `2001:4860:4802:38::15` | 1/2 Hour | (IPv6 - if provided by Cloud Run) |
| **CNAME** | `www` | `ghs.googlehosted.com.` | 1/2 Hour | Routes `www` subdomain to Cloud Run |

> [!NOTE]
> Always verify the exact IP addresses shown in your Google Cloud Run custom domain screen, as Google assigns optimal Anycast IPs for your region.

---

### Step 3: SSL Certificate Activation & Propagation
- DNS propagation typically takes **5 to 30 minutes** (up to 24-48 hours depending on global TTL).
- Once DNS records resolve, Google Cloud automatically requests and installs a **Let's Encrypt / Google Trust Services SSL certificate**.
- Test resolution using terminal or PowerShell:
  ```powershell
  Resolve-DnsName talktechtome.co.uk
  Resolve-DnsName www.talktechtome.co.uk
  ```

---

## Local Development & Testing

To run the site locally on your machine:

```bash
# Install dependencies
npm install

# Start Vite hot-reloading dev server
npm run dev
```
Open `http://localhost:3000` in your browser.

To test the production build locally:
```bash
npm run build
npm run preview
```

---

## Updating Content & Social Links

All brand info, links, featured videos, articles, and bio copy are centralized in:
- `src/data/content.ts`

Any edits to `content.ts` will update across the entire site automatically.
