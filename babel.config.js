module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ['@babel/preset-react', {runtime: "automatic"}],
        /* 
          second one helping our testing lib to convert that jsx code to html so that 
          it can read properly.Our test cases has jsx code.It converts it.
        */
    ],
};
/*
    now we are using jest with babel and its babel config file for jest that we added now.
    when adding this , now parcel internally uses babel and has its own babel config file.
    when we add this file , parcel gets confused in the 2 babel config files.
    so we will add config for parcel as well when using with jest.
    go to parcel website and search its configuration with jest.
    so created .parcelrc file.
*/
