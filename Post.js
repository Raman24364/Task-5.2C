import React, { useState } from "react";
import './Post.css';
function Post(){
    const[question, setQuestion] =useState(false);
    const[article, setArticle] = useState(false);

    const handleQuestionClick = () => {
        setQuestion(true);
        setArticle(false); 
      };
    
      const handleArticleClick = () => {
        setArticle(true);
        setQuestion(false); 
      };
    return(
        
        <>
            <div className="First">
                <h2 className="h_tag">New Post</h2>
            </div>
            
            <form className="form">
            <h2 className="Heading">Select post option: </h2>
            
                <input  type="radio" id="question" name="language" value="Question"   onClick={handleQuestionClick}/>
                <label  for="question">Question</label><br/>

                 <input type="radio" id="article" name="language" value="Article" onClick={handleArticleClick} />
                <label for="article">Article</label> 
            </form>
            

          


            {  question && 
            <div>
            <div className="Heading_Border">
            <p className="Text_Adding">What do you want to ask or share</p>
            </div>
            <div className="Title_add">
          <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Start your question" name="title"/>

            </div>
            <div className="Second">
                <h3 className="textbox">Describe your Problem</h3>
                <textarea id="area" rows="10" cols="50"></textarea>
            </div>
            <div className="Tags">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags"/>
            </div>
            <div className="button">
            <button>Post</button>

            </div>
            </div>
            }







            {  article && 
            <div className="Article_Margin">
            <div className="Heading_Border">
            <p className="Text_Adding">What do you want to ask or share</p>
            </div>
            <div className="Title_add">
          <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Start your question" name="title"/>

            </div>
            <div>
            <h3 className="textbox">Abstract</h3>
            <textarea id="area" rows="3" cols="20">Enter a 1 paragraph abstract</textarea>
            </div>
            <div className="Second">
                <h3 className="textbox">Article text</h3>
                <textarea id="area" rows="10" cols="50">Enter a 1 paragraph abstract</textarea>
            </div>

            <div className="Tags">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags to describe abstract"/>
            </div>
            <div className="button">
            <button>Post</button>

            </div>
            </div>
            }
            
            
        </>
    )
}
export default Post;