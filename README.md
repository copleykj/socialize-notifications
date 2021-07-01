# Notifications

Provides social network style notifications for your Meteor app.

>>This is a [Meteor][meteor] package with part of it's code published as a companion NPM package made to work with clients other than Meteor. For example your server is Meteor, but you want to build a React Native app for the client. This allows you to share code between your Meteor server and other clients to give you a competitive advantage when bringing your mobile and web application to market.

## Supporting the Project

In the spirit of keeping this and all of the packages in the [Socialize][socialize] set alive, I ask that if you find this package useful, please donate to it's development.

Litecoin: LXLBD9sC5dV79eQkwj7tFusUHvJA5nhuD3 / [Patreon](https://www.patreon.com/user?u=4866588) / [Paypal](https://www.paypal.me/copleykj)

## Meteor Installation

This package relies on the npm package `simpl-schema` so you will need to make sure it is installed as well.

```shell
meteor npm install --save simpl-schema
meteor add socialize:notifications
```

## NPM Installation

When using this package with React Native, the dependency tree ensures that `simpl-schema` is loaded so there's no need to install it as when using within Meteor.

```shell
 npm install --save @socialize/notifications
```

## Usage Outside Meteor

The client side parts of this package are published to NPM as `@socialize/cloudinary` for use in front ends outside of Meteor.

When using the npm package you'll need to connect to a server, which hosts the server side Meteor code for your app, using `Meteor.connect` as per the [@socialize/react-native-meteor usage example](https://github.com/copleykj/react-native-meteor#example-usage) documentation.

 ```javascript
Meteor.connect('ws://192.168.X.X:3000/websocket');
 ```

### React Native

When using this package with React Native there is some minor setup required by the `@socialize/react-native-meteor` package. See [@socialize/react-native-meteor react-native](https://github.com/copleykj/react-native-meteor#react-native) for necessary instructions.

## Basic Usage

Depending on the environment your code will be running in, you'll need to import the classes from the packages specific to that environment, either Meteor or React Native.
