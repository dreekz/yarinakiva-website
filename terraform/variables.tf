# Define the variables used in the project

variable "bucket_name" {
  description = "The name of the S3 bucket"
  default     = "yarinakiva-dev-website2"
}

variable "region" {
  description = "The AWS region where the resources will be deployed"
  default     = "us-east-1"
}

variable "certificate_arn" {
  description = "The ARN of the SSL certificate for CloudFront"
  default     = "arn:aws:acm:us-east-1:891377295987:certificate/2355452d-b837-4235-9dd2-2b64725df24f"
}