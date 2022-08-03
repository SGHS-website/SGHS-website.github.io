import React from 'react';
import schoolBackground from "../images/background.jpg"
import studentCouncil from "../images/studentCouncil.png"
import "../../src/styles/Club.css";
const Club = () => {
    return (
    <>
      <div className='banner'>
        <img src={schoolBackground}></img>
        <h2>Club</h2>
      </div>
      <div className="Club">
        <div className="content"></div>
        <div className="content1">
          <h2>ACADEMICS</h2>
        </div>
        <div className="content"></div>
        <div className="content2">
          <h2>ARTS</h2>
        </div>
        <div className="content"></div>
        <div className="content3">
          <h2>SPORTS</h2>
        </div>
        <div className="content"></div>
        <div className="content4">
          <h2>VOLUNTEERING</h2>
        </div>
      </div>
      <h1 class="category"> ACADEMICS </h1>
      <div>
          <ul class="list1">
              <li> ⦁ SOCIETY</li>
              <div class="sub-category">
                  <div class="club"> 
                      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4404d81137863.5cf645f61a289.png" alt="a"></img> 
                      <p> 다르마 </p> 
                  </div>
                  <div class="club"> 
                      <img src="https://thumbs.dreamstime.com/b/hi-there-inscription-handwritten-lettering-illustration-black-vector-text-speech-bubble-simple-marker-style-outline-imitation-193235702.jpg"></img> 
                      <p> 물소리 바람소리 </p> 
                  </div>
                  <div class="club"> 
                      <img src="image/학교사진 예시.jpg"></img> 
                      <p> MUNlit </p> 
                  </div>
              </div>
          </ul>
          <ul class="list2">
              <li> ⦁ FOREIGN LANGUAGES</li>
              <div class="sub-category">
                  <div class="club"> 
                      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4404d81137863.5cf645f61a289.png" alt="a"></img> 
                      <p> 다르마 </p> 
                  </div>
                  <div class="club"> 
                      <img src="https://thumbs.dreamstime.com/b/hi-there-inscription-handwritten-lettering-illustration-black-vector-text-speech-bubble-simple-marker-style-outline-imitation-193235702.jpg"></img> 
                      <p> 물소리 바람소리 </p> 
                  </div>
                  <div class="club"> 
                      <img src="image/학교사진 예시.jpg"></img> 
                      <p> MUNlit </p> 
                  </div>
              </div>
          </ul>
          <ul class="list3">
              <li> ⦁ STEM</li>
              <div class="sub-category">
                  <div class="club"> 
                      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4404d81137863.5cf645f61a289.png" alt="a"></img> 
                      <p> 다르마 </p> 
                  </div>
                  <div class="club"> 
                      <img src="https://thumbs.dreamstime.com/b/hi-there-inscription-handwritten-lettering-illustration-black-vector-text-speech-bubble-simple-marker-style-outline-imitation-193235702.jpg"></img> 
                      <p> 물소리 바람소리 </p> 
                  </div>
                  <div class="club"> 
                      <img src="image/학교사진 예시.jpg"></img> 
                      <p> MUNlit </p> 
                  </div>
              </div>
          </ul>
        </div>
      <h1 class="category"> ARTS </h1>
      <div>
          <ul class="list4">
              <div class="sub-category">
                  <div class="club"> 
                      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4404d81137863.5cf645f61a289.png" alt="a"></img> 
                      <p> 다르마 </p> 
                  </div>
                  <div class="club"> 
                      <img src="https://thumbs.dreamstime.com/b/hi-there-inscription-handwritten-lettering-illustration-black-vector-text-speech-bubble-simple-marker-style-outline-imitation-193235702.jpg"></img> 
                      <p> 물소리 바람소리 </p> 
                  </div>
                  <div class="club"> 
                      <img src="image/학교사진 예시.jpg"></img> 
                      <p> MUNlit </p> 
                  </div>
              </div>
          </ul>
        </div>
      <h1 class="category"> SPORTS </h1>
      <div>
          <ul class="list5">
              <div class="sub-category">
                  <div class="club"> 
                      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4404d81137863.5cf645f61a289.png" alt="a"></img> 
                      <p> 다르마 </p> 
                  </div>
                  <div class="club"> 
                      <img src="https://thumbs.dreamstime.com/b/hi-there-inscription-handwritten-lettering-illustration-black-vector-text-speech-bubble-simple-marker-style-outline-imitation-193235702.jpg"></img> 
                      <p> 물소리 바람소리 </p> 
                  </div>
                  <div class="club"> 
                      <img src="image/학교사진 예시.jpg"></img> 
                      <p> MUNlit </p> 
                  </div>
              </div>
          </ul>
        </div>
        <h1 class="category"> VOLUNTEERING </h1>
      <div>
          <ul class="list6">
              <div class="sub-category">
                  <div class="club"> 
                      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4404d81137863.5cf645f61a289.png" alt="a"></img> 
                      <p> 다르마 </p> 
                  </div>
                  <div class="club"> 
                      <img src="https://thumbs.dreamstime.com/b/hi-there-inscription-handwritten-lettering-illustration-black-vector-text-speech-bubble-simple-marker-style-outline-imitation-193235702.jpg"></img> 
                      <p> 물소리 바람소리 </p> 
                  </div>
                  <div class="club"> 
                      <img src="image/학교사진 예시.jpg"></img> 
                      <p> MUNlit </p> 
                  </div>
              </div>
          </ul>
        </div>
    </>
    );

}

  
export default Club;