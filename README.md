# Corporate Chat #

## Run on Android ##

1) ```Open a new bash shell```
2) ```npm install```
3) ```npm run android```

## Run on iOS ##

1) Open a new bash shell
2) ```npm install```
3) ```cd ios```
4) ```rm -rf ~/Library/Caches/CocoaPods Pods ~/Library/Developer/Xcode/DerivedData/*; pod deintegrate; pod setup; pod install;```
5) ```open in folder ios filename extension with .xcworkspace```

## Create apk ##

1) ```cd android```
2) ```./gradlew assembleRelease```

## Create ipa ##

1) ```npm i```
3) ```cd ios```
4) ```rm -rf ~/Library/Caches/CocoaPods Pods ~/Library/Developer/Xcode/DerivedData/*; pod deintegrate; pod setup; pod install;```
5) ```xcodebuild archive -scheme corporate_chat -workspace corporate_chat.xcworkspace -configuration Release -archivePath build```
6) ```xcodebuild -exportArchive -archivePath build.xcarchive -exportOptionsPlist exportOptions.plist -exportPath build```

## Run detox-debug on Android ##

1) Open a new bash shell
2) npm install
3) cd android
4) ./gradlew clean
5) npm run android
6) Open a new bash shell
7) cd android
8) ./gradlew assembleAndroidTest
9) npm run detox-debug

## Run detox-debug on iOS ##

1) Open a new bash shell
2) npm install
3) cd ios
4) rm -rf ~/Library/Caches/CocoaPods Pods ~/Library/Developer/Xcode/DerivedData/*; pod deintegrate; pod setup; pod install;
5) npm run ios
6) detox build --configuration ios.sim.debug
7) detox test --configuration ios.sim.debug

## Run physical device on iOS ##

1) in appDelegate.m (if Debug) change string from [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil]; to [NSURL URLWithString:@"http://172.20.10.2:8081/index.bundle?platform=ios&dev=true&minify=false"];

## Fix error for running debbuger

1) npm cache verify
2) npm run android --reset-cache

## EsLint ##

ESLint fixes are syntax-aware so you won't experience errors introduced by traditional find-and-replace algorithms. It statically analyzes your code to quickly find problems.

You have to install dbaeumer.vscode-eslint to your plagins.

## TestID's code style ##

First part of the string is main purpose of component or element. Second part is route name that we pass on to it.
If there are multiple items with unique value (e.g. username), we add this unique part in the center of the testID's string between "_" symbol.
For example:
1) Simple component: ProfileHeaderTextSettingView
2) Component with unique value: ConactItem_uniqueusername_ContactsView

## Create react-native component from SVG ## 
1) Instal library ```npm install -g msvgc```
2) Convert file from root dir ```msvgc -f  ./src/assets/fileName.svg -o ./src/assets/ --react-native```