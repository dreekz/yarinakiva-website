output "website_url" {
  value = aws_cloudfront_distribution.website_distribution.domain_name
}

output "s3_website_endpoint" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}