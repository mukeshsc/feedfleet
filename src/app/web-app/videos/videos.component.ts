import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  name = 'Video events';
  videoSource = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  @ViewChild('videoPlayer') videoplayer: any;
  public startedPlay:boolean = false;
  public show:boolean = false;
  pauseVideo(videoplayer)
  {
    videoplayer.nativeElement.play();
    // this.startedPlay = true;
    // if(this.startedPlay == true)
    // {
       setTimeout(() =>
       {
        videoplayer.nativeElement.pause();
         if(videoplayer.nativeElement.paused)
        {
          this.show = !this.show;
        }
       }, 5000);
    // }
  }

  closebutton(videoplayer){
    this.show = !this.show;
    videoplayer.nativeElement.play();
  }


  constructor() { }

  ngOnInit(): void {
  }
}
