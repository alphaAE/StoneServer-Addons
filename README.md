# StoneServer-Addons

Bash install:

```
#! /bin/bash

dir_main="StoneServer-Addons-Code"
dir_out="/root/stoneserver/game/behavior_packs"

if [ -d $dir_main ]
then
        rm -rf ./$dir_main
fi

git clone https://github.com/alphaAE/StoneServer-Addons.git $dir_main

for dir_addon in `ls $dir_main`
do      
        echo "Addon: "$dir_addon
        if [ -d $dir_out"/"$dir_addon ]
        then
                rm -rf $dir_out"/"$dir_addon
        fi
        if [ -d $dir_main"/"$dir_addon ]
        then
                mv $dir_main"/"$dir_addon"/"build $dir_main"/"$dir_addon"/"$dir_addon
                cp -r $dir_main"/"$dir_addon"/"$dir_addon $dir_out"/"$dir_addon
        fi
done

rm -rf ./$dir_main

```