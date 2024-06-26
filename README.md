# Evaluate a News Article with Natural Language Processing

Web tool that allows users to run **Natural Language Processing (NLP)** on articles or blogs found on other websites.🙎‍♀️🙎‍♂️



## NLP

NLP is the ability of an application to understand the human language, written or oral.

Following are the project prerequisites:

Webserver - Node
Web application framework for routing - Express
Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
External script - Service Worker
External API - Meaning Cloud




## Introduction to Natural Language Processing

NLP is a subset of AI that provides computers ability to process or interact with natural human speech. In NLP, machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech.

**NLP on Human Voice**: For example, everyone who has used Alexa or Google Assistant or other voice command systems knows that these devices are always improving, by collecting and interpreting voice data. Verbal interactions can be incredibly hard to decipher. Sarcasm, for instance, requires understanding not just words and grammar but the tone as well, and regional accents and ways of saying things have to be taken into account, not to mention coverage for all the major languages.

**NLP on Text**: An example is Grammarly editing tool, which parses the text that you write, and suggests if the tone is professional or not. Another example is the Smart Compose feature for Gmail that uses NLP to suggest words and statements based on your current context.


## Main Tools

1. **webpack**: Webpack is a powerful open-source JavaScript module bundler and build tool. It bundles JavaScript files and other assets like images, CSS, and HTML through loaders and plugins. Webpack optimizes dependencies, automates builds, and improves performance by splitting code and enabling lazy loading. This makes it ideal for both simple and complex web applications, enhancing development efficiency and maintainability.

2. **Loaders**: Loaders in Webpack are transformations applied to the source code of modules. They allow you to preprocess files as you import or load them. For instance, you can use loaders to transform ES6 code to ES5 using Babel, compile SCSS to CSS, or inline images as data URLs. Loaders are configured in the Webpack configuration file under the module.rules section, specifying the file types they should process and the transformations to apply. This makes Webpack highly versatile, enabling it to handle a variety of file types and preprocessing tasks within a single build process.

3. **Plugins**: Plugins in Webpack are used to perform a wide range of tasks to optimize and customize the build process. Unlike loaders, which transform individual files, plugins can affect the entire build. They can be used for tasks such as bundle optimization, asset management, and injection of environment variables. Some common plugins include the HtmlWebpackPlugin to generate HTML files, MiniCssExtractPlugin to extract CSS into separate files, and DefinePlugin to create global constants. Plugins are configured in the Webpack configuration file under the plugins array, allowing for powerful extensions and enhancements to the build process.

