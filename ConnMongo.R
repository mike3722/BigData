#intsall package mongolite in window under Global Envoirment,go to package the hit install and 
#type in serach

libary(mongolite)

conn<-mongo("collection_name", url = "mongod://localhost/databasename")

mydata<- con$find('{"_id" : "us"}')
print(mydata)

