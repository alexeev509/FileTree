For run project you must:
1) You must run mvn package (at this time will start work plugin cargo for starting tomcat) 
2) Then you have two ways: 
 2.1 use local database postgres
 2.2 use database from heroku
      For 2.1 you must customize "bd.properties" in such way:
bd.password=your password !
bd.username=your username !
bd.url=your url for database !
bd.driver=org.postgresql.Driver
#Heroku bd properties
#bd.password=d65b62bc7aaaa472822ad97af3f1a80ec53e64d3cbfadb7aa6f096ead1c33935
#bd.username=usrpanxwbdoynk
#bd.url=jdbc:postgresql://ec2-46-137-113-157.eu-west-1.compute.amazonaws.com:5432/d8e6593mskmgb2?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory
#bd.driver=org.postgresql.Driver

and then you can run script in "sqlScript.sql" for your local database: 

        For 2.2 you must customize "bd.properties" in such way:
        
#bd.password=594012
#bd.username=postgres
#bd.url=jdbc:postgresql://localhost:5432/treefile
#bd.driver=org.postgresql.Driver
#Heroku bd properties
bd.password=d65b62bc7aaaa472822ad97af3f1a80ec53e64d3cbfadb7aa6f096ead1c33935
bd.username=usrpanxwbdoynk
bd.url=jdbc:postgresql://ec2-46-137-113-157.eu-west-1.compute.amazonaws.com:5432/d8e6593mskmgb2?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory
bd.driver=org.postgresql.Driver

it will be work with my database in "heroku"
