@echo off
echo Building and deploying to Firebase...
call npm run build
firebase deploy

echo.
echo ====================================
echo DEPLOYMENT COMPLETE!
echo Your site is live at:
echo - https://devmundus-website.web.app
echo - https://devmundus-website.firebaseapp.com
echo.
echo Next: Add custom domain in Firebase Console:
echo https://console.firebase.google.com/project/devmundus-website/hosting
echo ====================================
echo.
pause