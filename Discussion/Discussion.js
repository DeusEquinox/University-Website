function AddQuestion() {

    const Question = document.getElementById("question").value;
    const List = document.getElementById('Qs');

    if (Question.trim() !== "") {
        const listItem = document.createElement("li");
        const listContent = document.createElement("h4");
        const ReplyButton = document.createElement("button");
        const repArea = document.createElement("div")

        listContent.classList.add("title");
        ReplyButton.classList.add("Rep");

        listContent.innerText = Question;
        listItem.appendChild(listContent);

        ReplyButton.innerHTML = "Reply";
        document.getElementsByTagName("button");

        List.appendChild(listItem);
        List.appendChild(repArea);
        List.appendChild(ReplyButton);

        
        ReplyButton.onclick = function(){
            let name = prompt("Enter your name")
            let reply = prompt("Enter your reply")

            if (reply == null || reply == "") {
                alert("Reply cannot contain nothing")
            } else {
                repArea.innerHTML += "<br>" + "<b>" + name + "</b>" + ": " + reply
                alert("Your response has been added")
            }
            
        };

        Question = "";
    }
}

function AddReply() {
        let name = prompt("Enter your name")
        let reply = prompt("Enter your reply")

        if (reply == null || reply == "") {
            alert("Reply cannot contain nothing")
        } else {
            repArea.innerHTML += "<br>" + "<b>" + name + "</b>" + ": " + reply
            alert("Your response has been added")
        }
}