# Yarin Akiva - Portfolio Website

A modern, responsive portfolio website showcasing my DevOps and cloud infrastructure expertise. Built with MkDocs and deployed on AWS using Infrastructure as Code and automated CI/CD practices.

## 🏗 Architecture
This website utilizes:
- **S3**: Static website hosting with versioning
- **CloudFront**: Global content delivery and caching
- **ACM**: SSL/TLS certification
- **IAM**: OIDC authentication for secure deployments
- **Cloudflare**: DNS management and security

## 🛠 Technologies Used
- **MkDocs with Material Theme**: Static site generator
- **Tailwind CSS & JavaScript**: Responsive design and interactions
- **Terraform**: Infrastructure as Code
- **GitHub Actions**: CI/CD with OIDC authentication

## 🚀 Setup & Development

### Prerequisites
- Python 3.x
- pip (Python package manager)
- AWS CLI configured
- Terraform (for infrastructure)

### Quick Start
```bash
# Clone and run locally
git clone https://github.com/dreekz/yarinakiva-website.git
cd yarinakiva-website
pip install -r requirements.txt
mkdocs serve

👤 Contact

GitHub: @dreekz
LinkedIn: yarinakiva