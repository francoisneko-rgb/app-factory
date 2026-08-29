# install-api-keys.ps1
# Enregistre chaque clé de api-keys.env comme variable d'environnement
# UTILISATEUR Windows (persistante, partagée par tous les projets OpenCode).
$envFile = Join-Path $PSScriptRoot "api-keys.env"
if (-not (Test-Path $envFile)) {
    Write-Host "Fichier introuvable : $envFile" -ForegroundColor Red
    Write-Host "Copie api-keys.env.template vers api-keys.env et remplis-le d'abord."
    exit 1
}
$count = 0
Get-Content $envFile | ForEach-Object {
    $line = $_.Trim()
    if ($line -eq "" -or $line.StartsWith("#")) { return }
    $parts = $line -split "=", 2
    if ($parts.Count -ne 2) { return }
    $name = $parts[0].Trim()
    $value = $parts[1].Trim()
    if ($value -eq "") {
        Write-Host "  [vide]   $name (ignore)"
        return
    }
    [Environment]::SetEnvironmentVariable($name, $value, "User")
    Write-Host "  [ok]     $name" -ForegroundColor Green
    $count++
}
Write-Host ""
Write-Host "$count cle(s) enregistree(s) au niveau utilisateur." -ForegroundColor Cyan
Write-Host "IMPORTANT : ferme et rouvre ton terminal pour que ce soit actif."
