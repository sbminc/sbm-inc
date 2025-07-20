Write-Host "Starting local server for slideshow..." -ForegroundColor Green
Write-Host ""
Write-Host "Open your browser and go to: http://localhost:8080/SBM-Mvulana-Slides-Template-Final.html" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Red
Write-Host ""

# Check if Python is available
try {
    python --version | Out-Null
    Write-Host "Using Python server..." -ForegroundColor Green
    python -m http.server 8080
} catch {
    Write-Host "Python not found, trying PowerShell server..." -ForegroundColor Yellow
    # PowerShell simple server
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:8080/")
    $listener.Start()
    
    Write-Host "Server started at http://localhost:8080/" -ForegroundColor Green
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath
        $filePath = Join-Path (Get-Location) $localPath.TrimStart('/')
        
        if (Test-Path $filePath) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
        }
        
        $response.Close()
    }
} 