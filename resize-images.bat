rem FORFILES /p D:\Projects\pdd\www\exm /m *.jpg /s /C "cmd /c echo @path"
FORFILES /p D:\Projects\pdd\www\exm /m *.jpg /s /C "cmd /c Y:\ImageMagick-6.8.6-7\mogrify -resize 320x @path"
