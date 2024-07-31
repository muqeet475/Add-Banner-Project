Next.js Ad Banner Project
Overview
This project is a Next.js application built with TypeScript. It displays ad banners on the homepage, each of which can be edited through a bottom sheet interface. The project is designed to be modular and follows best practices for frontend development.

Features
Ad Banner Display: Shows a list of ad banners with title, description, CTA, image, and background/template.
Edit Functionality: Each ad banner has an edit icon that opens a bottom sheet for modifying the details.
Modularity: Well-structured components for ad banners and bottom sheet editing.
Requirements
Next.js with TypeScript
React
Material-UI for the bottom sheet component
CSS Modules for styling
Setup and Installation
Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher)
npm or yarn
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/nextjs-ad-banner-project.git
cd nextjs-ad-banner-project
Install Dependencies
bash
Copy code
npm install
# or
yarn install
Run the Development Server
bash
Copy code
npm run dev
# or
yarn dev
Visit http://localhost:3000 to see the application in action.

Project Structure
pages/index.tsx: Home page displaying ad banners.
components/BannerImageComp.tsx: Component for displaying individual ad banners.
components/EditBannerTemplateBs.tsx: Bottom sheet component for editing banner details.
styles/BannerStyles.module.css: CSS module for styling ad banners and the bottom sheet.
Components
BannerImageComp
A reusable component that displays an ad banner. It includes:

Title
Description
CTA (Call-to-Action)
Image
Background/Template
Edit button to open the bottom sheet for editing
Props:

title: Banner title
description: Banner description
cta: Call-to-Action text
image: URL of the banner image
background: URL of the background/template image
onEdit: Function to handle edit action
EditBannerTemplateBs
A component that displays a bottom sheet for editing banner details. It includes:

Text fields for title, description, CTA, image URL, and background URL
Save button to update the banner details
Close button to dismiss the bottom sheet
Props:

open: Boolean indicating if the bottom sheet is open
onClose: Function to close the bottom sheet
banner: The current banner being edited
onSave: Function to save the updated banner details
JSON Data
The ad banners are powered by a JSON list. You can modify the initialBanners array in pages/index.tsx to include your own ad banners.

Example JSON Data
json
Copy code
[
  {
    "title": "Boost Your Leads",
    "description": "Harness AI For Effective Campaigns",
    "cta": "Learn More",
    "image": "/images/img1.png",
    "background": "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png"
  }
  // Add more banners as needed
]
Styling
The styling is handled using CSS Modules. You can modify styles/BannerStyles.module.css to adjust the look and feel of the ad banners and bottom sheet.

Deployment
To deploy the application, you can use Vercel, Netlify, or any other hosting provider that supports Next.js. Follow their documentation for deployment instructions.

Contribution
Feel free to fork the repository and submit pull requests. For issues or feature requests, please open an issue on GitHub.

License
This project is licensed under the MIT License.

Contact
For any queries or feedback, contact me at ShashwatShukla293@gmail.com.
