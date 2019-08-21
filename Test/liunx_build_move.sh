#! /bin/bash

npm run build

project_path=$(pwd)

dir_name="${project_path##*/}"
dir_main="build"
dir_out="../../../game/behavior_packs"

if [ -d $dir_out"/"$dir_name ]
then
	rm -rf $dir_out"/"$dir_name
fi

cp -r $dir_main $dir_out"/"$dir_main
mv $dir_out"/"$dir_main $dir_out"/"$dir_name

echo "Build Move OK! :)"