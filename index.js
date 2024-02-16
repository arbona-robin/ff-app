// Test that ffmpeg is installed and working
// Run: node index.js

import ffmpeg from "fluent-ffmpeg";
import { exec } from "child_process";

// readdirSync("/usr/local/bin").forEach((file) => {
//   console.log(file);
// });

ffmpeg.setFfmpegPath("/usr/local/bin/ffmpeg");
ffmpeg.setFfprobePath("/usr/local/bin/ffprobe");

// ffmpeg.getAvailableCodecs(function (err, codecs) {
//   console.log("Codecs:", codecs);
// });

// Concatenate two videos in data/input folder

ffmpeg()
  .input("data/input/kohlipe1.mp4")
  .input("data/input/kohlipe1.mp4")
  .on("error", function (err) {
    console.log("An error occurred: " + err.message);
  })
  .on("end", function () {
    console.log("Merging finished!");
  })
  .mergeToFile("data/output/merged.mp4", "data/temp");

// Concat with child_process
// exec(
//   "/usr/local/bin/ffmpeg -i data/input/kohlipe1.mp4 -i data/input/kohlipe1.mp4 -filter_complex '[0:v:0][1:v:0]concat=n=2:v=1[outv]' -map '[outv]' data/output/merged2.mp4",
//   (err, stdout, stderr) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("stdout", stdout);
//     console.log("stderr", stderr);
//   }
// );
