const apiKey = "AIzaSyDne3jtNnBTWkASNQVvOzaeHzNvmg4lLFg"; // ← ここを自分のAPIキーに
const channelId = "YOUR_CHANNEL_ID"; // ← ここを自分のチャンネルIDに

const countElement = document.getElementById("subscriberCount");
const message = document.getElementById("message");
const subscribeButton = document.getElementById("subscribeButton");

async function fetchSubscribers() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
    );
    const data = await response.json();
    const count = data.items[0].statistics.subscriberCount;
    countElement.textContent = Number(count).toLocaleString() + "人";
  } catch (error) {
    countElement.textContent = "取得できませんでした";
    console.error(error);
  }
}

// 初回表示
fetchSubscribers();
// 10秒ごとに更新
setInterval(fetchSubscribers, 10000);

// ボタンタップ時にメッセージ表示
subscribeButton.addEventListener("click", () => {
  message.classList.add("show");
});
