
const Bottom = () => {
  return (
          <div className="bottom">
            <div className="icons">
              <label htmlFor="file">
                <img src="./img.png" alt="Attach" />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleImg}
              />
             {/*<img src="./camera.png" alt="Camera" onClick={handleTakePhoto}/>*/}
              <img src="./mic.png" alt="Mic" onClick={handleRecordAudio} />
            {isRecording ? (
              <div className="recordingOverlay">
                <span>{recordTime}s</span>
                <button className="stopButton" onClick={handleRecordAudio}>
                ■
                </button>
              </div>
            ) : audioURL ? (
              <div className="playbackControls">
                <audio controls src={audioURL}></audio>
                <button className="deleteButton" onClick={handleDeleteRecording}>
                  Del
                </button>
              </div>
            ) : (
              <input
                type="text"
                placeholder={
                  isCurrentUserBlocked || isReceiverBlocked
                    ? "You cannot send a message"
                    : "Type a message..."
                }
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={isCurrentUserBlocked || isReceiverBlocked}
              />
            )}
            <div className="emoji">
              <img
                src="./emoji.png"
                alt="Emoji"
                onClick={() => setOpen((prev) => !prev)}
              />
              <div className="picker">
                {open && <EmojiPicker onEmojiClick={handleEmoji} />}
              </div>
            </div>
            <button
              className="sendButton"
              onClick={() => {
                handleSend();
                handleSendAudio();
              }}
              disabled={isCurrentUserBlocked || isReceiverBlocked}
            >
              Send
            </button>
          </div>
        </div>
      );
    };
  
export default Bottom