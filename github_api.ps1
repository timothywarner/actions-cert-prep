# List all workflows (get the IDs)
$headers = @{
  Authorization = "Bearer $Env:GITHUB_TOKEN"
}

$uri = "https://api.github.com/repos/timothywarner/actions-cert-prep/actions/workflows"
$response = Invoke-RestMethod -Uri $uri -Method Get -Headers $headers
$response.workflows | Format-Table name, id


# List workflow runs given a workflow IDs
$headers = @{
  "Accept"               = "application/vnd.github+json"
  "Authorization"        = "Bearer $Env:GITHUB_TOKEN"
  "X-GitHub-Api-Version" = "2022-11-28"
}

$uri = "https://api.github.com/repos/timothywarner/actions-cert-prep/actions/81730136"

$response = Invoke-RestMethod -Uri $uri -Method Get -Headers $headers
$response | Format-List


