jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore pdd.keystore -signedjar platforms\android\bin\PDD-release-unalign.apk platforms\android\bin\PDD-release-unsigned.apk pdd
jarsigner -verify platforms\android\bin\PDD-release-unalign.apk
zipalign -f -v 4 platforms\android\bin\PDD-release-unalign.apk platforms\android\bin\PDD-release.apk
zipalign -c -v 4 platforms\android\bin\PDD-release.apk
pause
