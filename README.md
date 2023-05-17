## How to Update News, Challenge Grants, and People's Page

If you have cloned this repository to your desktop, follow these steps:

1. Navigate to `src > assets > sheets`. Here, you will find all the CSV files that contain the content for the site:
   - `news.csv`: News tab
   - `recipients.csv`: Challenge Grant tab
   - `staff.csv`: People tab

2. To update the information, use a spreadsheet editor like Microsoft Excel to edit the corresponding sheets.

To update the image, follow these steps:

1. Navigate to `public > images`.
2. Open the folder for the page where you want to upload an image. For example, if you are uploading a headshot, open the "people" folder.
3. Save your image into that folder and copy the file name for the image. If you are saving it into the people's folder make sure the image name matches the individual's full name. Also make sure for headshots, they are cropped as squares for best alignment
4. Input the file name of the image into the respective spreadsheet that you are editing.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload whenever you make changes. You may also see any lint errors in the console.

### `npm run deploy`

Deploys the app and pushes changes to the 'gh-pages' branch. GitHub Pages uses this branch to render the website.
