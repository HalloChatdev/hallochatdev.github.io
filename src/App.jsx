import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* 头部 */}
      <header>
        <nav>
          <div className="logo">
            <span className="logo-icon">💬</span>
            <span className="logo-text">HalloChat</span>
          </div>
          <ul className="nav-links">
            <li><a href="#features">特性</a></li>
            <li><a href="#tech">技术栈</a></li>
            <li><a href="#progress">开发进度</a></li>
            <li><a href="#download">下载</a></li>
          </ul>
        </nav>
      </header>

      {/* 英雄区域 */}
      <section className="hero">
        <div className="hero-content">
          <h1>安全、高效的实时聊天应用</h1>
          <p>HalloChat 是一款现代化的即时通讯软件，提供安全加密的通信方式，支持单聊、加密聊天、多人群组等多种功能。</p>
          <div className="cta-buttons">
            <a href="#download" className="btn btn-primary">立即下载</a>
            <a href="#features" className="btn btn-secondary">了解更多</a>
          </div>
        </div>
      </section>

      {/* 特性区域 */}
      <section className="features" id="features">
        <h2 className="section-title">核心特性</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>安全加密通信</h3>
            <p>采用端到端加密技术，确保您的聊天内容只有您和接收方能够查看，保护您的隐私安全。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>实时聊天</h3>
            <p>支持文字、语音、图片等多种消息类型，实时推送，让您的沟通更加便捷高效。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>多人群组</h3>
            <p>支持创建和加入多人群组，类似于Telegram风格，方便团队协作和朋友聚会。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📢</div>
            <h3>频道功能</h3>
            <p>支持创建和订阅频道，类似于Telegram/QQ频道，方便信息传播和内容分享。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>阅后即焚</h3>
            <p>支持消息阅后即焚功能，设定时间后自动销毁，保护敏感信息不被泄露。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>跨平台支持</h3>
            <p>支持Windows、Linux等多个平台，让您在不同设备上都能使用HalloChat。</p>
          </div>
        </div>
      </section>

      {/* 技术栈区域 */}
      <section className="tech-stack" id="tech">
        <div className="tech-stack-content">
          <h2 className="section-title">技术栈</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="feature-icon">⚛️</div>
              <h4>React</h4>
            </div>
            <div className="tech-item">
              <div className="feature-icon">💻</div>
              <h4>Electron</h4>
            </div>
            <div className="tech-item">
              <div className="feature-icon">🟢</div>
              <h4>Node.js</h4>
            </div>
            <div className="tech-item">
              <div className="feature-icon">🚂</div>
              <h4>Express</h4>
            </div>
            <div className="tech-item">
              <div className="feature-icon">🍃</div>
              <h4>MongoDB</h4>
            </div>
            <div className="tech-item">
              <div className="feature-icon">🔌</div>
              <h4>Socket.IO</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 开发进度区域 */}
      <section className="progress" id="progress">
        <h2 className="section-title">开发进度</h2>
        <div className="progress-container">
          <div className="progress-item">
            <div className="progress-header">
              <span className="progress-title">基础单聊功能（文字消息）</span>
              <span className="progress-status status-completed">已完成</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-header">
              <span className="progress-title">用户认证系统</span>
              <span className="progress-status status-completed">已完成</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-header">
              <span className="progress-title">服务端基础框架</span>
              <span className="progress-status status-completed">已完成</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-header">
              <span className="progress-title">语音/图片消息发送</span>
              <span className="progress-status status-planned">规划中</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '20%' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-header">
              <span className="progress-title">端到端加密聊天</span>
              <span className="progress-status status-planned">规划中</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '10%' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-header">
              <span className="progress-title">阅后即焚功能</span>
              <span className="progress-status status-planned">规划中</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '5%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer id="download">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HalloChat</h3>
            <p>安全、高效的实时聊天应用</p>
          </div>
          <div className="footer-section">
            <h4>快速链接</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/Ink-dark/HalloChat">GitHub</a></li>
              <li><a href="https://gitee.com/moranqidarkseven/HalloChat-Qt">Gitee</a></li>
              <li><a href="mailto:dev@hallochat.cn">联系我们</a></li>
              <li><a href="#">许可证</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>版本信息</h4>
            <p>当前版本: v0.2.1</p>
            <p>发布日期: 2025-11-08</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 HalloChat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
