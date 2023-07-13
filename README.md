## How to Update News, Challenge Grants, and People's Page

If you have cloned this repository to your desktop, follow these steps:

1. Navigate to `src > assets > sheets`. Here, you will find all the CSV files that contains content for the site:
   - `news.csv`: News tab
   - `staff.csv`: People tab

2. To update the information, use a spreadsheet editor like Microsoft Excel to edit the corresponding sheets.

To update the image, follow these steps:

1. Navigate to `public > images`.
2. Open the folder for the page where you want to upload an image. For example, if you are uploading a headshot, open the "people" folder.
3. Save your image into that folder and copy the file name for the image. If uploading a headshot, please make sure the image is cropped as a square for best alignment
4. After saving the name of the image file, navigate to the respective spreadsheet where you will input the name of the file. This will associate that file with an asset.
   - For example, if I was uploading a picture for Sam Baker then I would first save the image file into the people's folder as Sam_Baker.jpg and then open the staff.csv. In the spreadsheet I can simply input the name of the new image file in the column 'fileName' to associate that image file with Sam.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload whenever you make changes. You may also see any lint errors in the console.

### `npm run deploy`

Deploys the app and pushes changes to the 'gh-pages' branch. GitHub Pages uses this branch to render the website.
