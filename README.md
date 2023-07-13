## Prerequisites for this Repo

- Have Node.js installed (https://nodejs.org/en/download)
- Have Git installed (https://git-scm.com/downloads)

## Project Structure

This is a react based project created using create-react-app

The `public/` folder is where all static assets are contained.Content such as index.html, icons, and images are stored here. It should not contain any dynamic or compiled code

The `src/` folder is where the source code of the application lives. This includes stylesheets and component files

The `.gitignore` file is used to ignore files that are unnecessary to be shared

The `CNAME` file stands for "Canonical Name" and is used for DNS(Domain Name System) setup

The `package.json` is where a developer can configure scripts and look at key details of the project. `package-lock.json` is used for dependencies of the project and make sure the installation process in consistent. While `package.json` is okay to edit, `package-lock.json` should not be manually changed

## Update Content

If you have cloned this repository to your desktop, follow these steps:

1. Navigate to `src > assets > sheets`. Here, you will find all the CSV files that contains content for the site:

   - `news.csv`: News tab
   - `staff.csv`: People tab

1. To update the information, use a spreadsheet editor like Microsoft Excel to edit the corresponding sheets.

To update the image, follow these steps:

1. Navigate to `public > images`.

2. Open the folder for the page where you want to upload an image. For example, if you are uploading a headshot, open the "people" folder.

3. Save your image into that folder and copy the file name for the image. If uploading a headshot, please make sure the image is cropped as a square for best alignment

4. After saving the name of the image file, navigate to the respective spreadsheet where you will input the name of the file. This will associate that file with an asset.
   - For example, if I was uploading a picture for Sam Baker then I would first save the image file into the people's folder as Sam_Baker.jpg and then open the staff.csv. In the spreadsheet I can simply input the name of the new image file in the column 'fileName' to associate that image file with Sam.

## Running Project on localhost

To run the project locally you can run the following commands:

### `npm install`

Installs dependencies into a folder called `node_modules` where the source code of the dependencies live. Should not be manually edited

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload whenever you make changes. You may also see any lint errors in the console.

## Push Changes to Production Build

### `npm run deploy`

Deploys the app and pushes changes to the 'gh-pages' branch. GitHub Pages uses this branch to render the website.
