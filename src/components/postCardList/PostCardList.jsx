import PostCard from "../PostCard";

let array =[  
    {
        "id": "64b181e099665b5a18c17fd3",
        "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00364243-lmpvmyqmad-portrait.jpg",
        "likes": 0,
        "tags": [],
        "text": "new post after cleanup",
        "publishDate": "2023-07-14T17:12:00.505Z",
        "updatedDate": "2023-07-14T17:12:00.505Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ca",
            "title": "ms",
            "firstName": "Sara",
            "lastName": "Andersen",
            "picture": "https://randomuser.me/api/portraits/women/58.jpg"
        }
    },
    {
        "id": "64b17f7299665b1a41c17f1d",
        "image": "https://assets-in.bmscdn.com/discovery-catalog/events/et00363824-gelsgrerpp-portrait.jpg",
        "likes": 0,
        "tags": [],
        "text": "another post ",
        "publishDate": "2023-07-14T17:01:38.239Z",
        "updatedDate": "2023-07-14T17:01:38.239Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ca",
            "title": "ms",
            "firstName": "Sara",
            "lastName": "Andersen",
            "picture": "https://randomuser.me/api/portraits/women/58.jpg"
        }
    }

] 

function PostCardList()
{
   
    return(
        array.map((post)=><PostCard key={post.id}></PostCard>)
    )
}

export default PostCardList;
