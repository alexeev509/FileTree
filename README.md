For run project you must:
1) You must run mvn package (at this time will start work plugin cargo for starting tomcat) 
2) Then you have two ways: <br>
 2.1 use local database postgres<br>
 2.2 use database from heroku<br>
      For 2.1 you must customize "bd.properties" in such way:<br>
bd.password=your password !<br>
bd.username=your username !<br>
bd.url=your url for database !<br>
bd.driver=org.postgresql.Driver<br>
#Heroku bd properties <br>
#bd.password=d65b62bc7aaaa472822ad97af3f1a80ec53e64d3cbfadb7aa6f096ead1c33935<br>
#bd.username=usrpanxwbdoynk<br>
#bd.url=jdbc:postgresql://ec2-46-137-113-157.eu-west-1.compute.amazonaws.com:5432/d8e6593mskmgb2?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory<br>
#bd.driver=org.postgresql.Driver<br>

and then you can run script in "sqlScript.sql" for your local database: 

        For 2.2 you must customize "bd.properties" in such way:
        
#bd.password=594012<br>
#bd.username=postgres<br>
#bd.url=jdbc:postgresql://localhost:5432/treefile<br>
#bd.driver=org.postgresql.Driver<br>
#Heroku bd properties<br>
bd.password=d65b62bc7aaaa472822ad97af3f1a80ec53e64d3cbfadb7aa6f096ead1c33935<br>
bd.username=usrpanxwbdoynk<br>
bd.url=jdbc:postgresql://ec2-46-137-113-157.eu-west-1.compute.amazonaws.com:5432/d8e6593mskmgb2?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory<br>
bd.driver=org.postgresql.Driver<br>

it will be work with my database in "heroku"
<br>
DEFAULT PROPERTIES ARE USING HEROKU DB!<br>

<h1>Description</h1>
This tree can do CRUD operations and you can move folders using drag and drop;<br>
For CRUD operations you can use buttons or you can right click on the folder or file;<br>
If your tree is empty you can click on button "Create" folder or file and you will see<br>
root of the tree
<br>
Current folder or file has blue backgroung
<br>
When you are openning folder it has delay 2 seconds
<br>
It this application were used patterns:<br>
1) MVC
2) FrontController (DispatcherServlet)
3) IoC
4) Dependency Injection
5) Singlton