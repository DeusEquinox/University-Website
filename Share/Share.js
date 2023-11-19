
   //paste here your copied configuration code
   const firebaseConfig = {
    apiKey: "AIzaSyCebGGckuSuuwCtgfJYwMEW4OhHjTroe8I",
    authDomain: "ctu-buddy-website.firebaseapp.com",
    projectId: "ctu-buddy-website",
    storageBucket: "ctu-buddy-website.appspot.com",
    messagingSenderId: "1057092388614",
    appId: "1:1057092388614:web:6616c27ca9366e61c44087"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   console.log(firebase);
   function uploadImage() {

        let titleName = prompt('Name?');

        if (titleName.trim() !== "") {
            const ref = firebase.storage().ref();
            const file = document.querySelector("#photo").files[0];
            const name = +new Date() + "-" + file.name;
            const metadata = {
                contentType: file.type
            };
            const task = ref.child(name).put(file, metadata);task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
            console.log(url);

            alert("Upload Successful")

            let List = document.getElementById('resources');
        
            const listItem = document.createElement("li");
            const listContent = document.createElement("h4");
            const downloadButton = document.createElement("button");

            downloadButton.innerHTML = "Download";
            downloadButton.onclick = function(){
                location.href = url;
            }

            listContent.classList.add("title");
            listContent.innerText = titleName;      
            listItem.appendChild(listContent);

            List.appendChild(listItem);
            List.appendChild(document.createElement("br"));
            List.appendChild(downloadButton);
        }
        
   )
   .catch(console.error);
   } else {
    alert("You have to give a title for the file.")
   }}
   const errorMsgElement = document.querySelector('span#errorMsg');