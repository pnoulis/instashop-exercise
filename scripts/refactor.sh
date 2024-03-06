#!/usr/bin/env bash

srcdir_top=$(cd -- $(dirname $(dirname ${BASH_SOURCE[0]})) && pwd);
srcdir=${srcdir_top}/client
echo $srcdir

while read -d $'\0' -r path; do
  echo $path
  # sed -E -i 's|^import.*from\s.(.*)/landmark.;$|import { ILandmark } from "\1/ILandmark";|' $path
  # sed -E -i 's|\bILandmark\b|ILandmark|g' $path
done < <(find ${srcdir} -iname '*.ts' -print0 -o -iname '*.js' -print0)
