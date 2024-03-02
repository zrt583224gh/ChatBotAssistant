const express = require('express');
const app = express();

// 设置端口号
const port = process.env.PORT || 3000;

// 处理根路径的GET请求
app.get('/', (req, res) => {
  res.send('Welcome to ChatBotAssistant!');
});

// 处理聊天请求的POST请求
app.post('/chat', (req, res) => {
  // 在这里处理聊天请求并返回响应
  const userQuery = req.body.query;
  const botResponse = chatBotResponse(userQuery);
  res.json({ response: botResponse });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 模拟聊天机器人回复的函数
function chatBotResponse(userQuery) {
  // 在这里实现聊天机器人的逻辑
  // 可以使用自然语言处理算法来理解用户的查询，并给出相关的回答
  const response = `You asked: "${userQuery}". Here is my response.`;
  return response;
}
