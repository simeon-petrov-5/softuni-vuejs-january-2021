# workshop-03-router-resources
## Steps to init the project

 1. Create a Mongo Database
 2. Fill your DB with the `DataSeeder` project
 3. Start and use your `API` project

 
## Create your Mongo DB

1. Go and login into https://cloud.mongodb.com/
 2. Create a new cluster from free tier (if no other is existing) and wait to be build
 3. Go to the **Cluster** -> **Collections** and create a new collection (not the importing option). The collection name will be used in your connection from node
 4. Go to **Database Access** (left side menu) and create a new user with administrator role. Simple admin/admin will work for this project.
 5. Click on the name of your **Project/Cluster** (dropdown top left)
 6. Click **Connect** on the cluster 
 7. Select the second option Connect your application from the modal
 8. If you don't have a created admin user you will be prompt to do it now
 9. Select Node and later then v3.6
 10. Copy the link and replace the <placeholders> with your data
 11. Set the link as an .env variable called `MONGO_CONNECTION` in each project (API & DataSeeder)

    mongodb+srv://<username>:<password>@cluster0.7gwia.mongodb.net/<cluster-name>?retryWrites=true&w=majority

## DataSeeder Project
An .env file with `MONGO_CONNECTION` is required for the project!

**Install all dependencies**

    npm install

**Start the application**

    npm run start

**Wait for the injection of data to be done**


## API Project
An .env file with `MONGO_CONNECTION` is required for the project!

**Install all dependencies**

    npm install

**Start the application**

    npm run start

**User Access**
There should be an already created user you can try to use:

    email: user@abv.bg
    password: 111111
