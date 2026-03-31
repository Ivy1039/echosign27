// main.js

// 1. 初始化語言：優先讀取瀏覽器紀錄，若無則預設為中文
let currentLang = localStorage.getItem('selectedLang') || 'zh';

/**
 * 更新頁面文字內容
 * 自動判斷純文字或 HTML 結構，確保 About Content 與一般標籤都能正確顯示
 */
function updateContent() {
    // 選取所有帶有 data-i18n 屬性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const content = translations[currentLang][key];

        if (content) {
            // 加入淡入動畫效果
            el.classList.remove('fade-in');
            void el.offsetWidth; // 觸發重繪 (Reflow)
            el.classList.add('fade-in');

            // 自動判斷：若內容包含 HTML 標籤則使用 innerHTML，確保連結與粗體有效
            if (content.includes('<')) {
                el.innerHTML = content;
            } else {
                el.textContent = content;
            }
        }
    });

    // 根據語系切換全域字體樣式
    document.body.className = currentLang === 'en' 
        ? 'lang-en antialiased overflow-x-hidden' 
        : 'lang-zh antialiased overflow-x-hidden';
    
    // 更新導航列中的切換按鈕文字 (EN / 中)
    const langBtnText = document.getElementById('lang-btn-text');
    if (langBtnText) {
        langBtnText.innerText = currentLang === 'zh' ? 'EN' : '中';
    }
}

/**
 * 切換語言函式
 * 存入 localStorage 確保跳轉至 Programs 或 Donate 頁面時語系不跳掉
 */
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('selectedLang', currentLang); 
    updateContent();
}

/**
 * 非同步載入頁首與頁尾組件
 * 確保元件載入後才執行 Lucide 圖示初始化與翻譯
 */
async function loadComponents() {
    try {
        // 同時抓取 header 與 footer 檔案
        const [headerRes, footerRes] = await Promise.all([
            fetch('header.html'),
            fetch('footer.html')
        ]);
        
        const headerHtml = await headerRes.text();
        const footerHtml = await footerRes.text();

        document.getElementById('header-placeholder').innerHTML = headerHtml;
        document.getElementById('footer-placeholder').innerHTML = footerHtml;

        // 初始化 Lucide 圖示
        if (window.lucide) {
            lucide.createIcons();
        }

        // 執行翻譯填充
        updateContent();
    } catch (err) {
        console.error('EchoSign 組件載入失敗:', err);
    }
}

// 監聽 DOM 載入完成事件
document.addEventListener('DOMContentLoaded', loadComponents);

// Home - Impact

const animateCounters = () => {
    const counters = document.querySelectorAll('.counter-value');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const prefix = counter.getAttribute('data-prefix') || '';
        const duration = 2000; // 整段動畫跑 2 秒
        const frameRate = 1000 / 60; 
        const totalFrames = Math.round(duration / frameRate);
        
        let currentFrame = 0;

        // 【防暴走機制】清除前一次可能還沒跑完的動畫計時器
        if (counter.animationTimeout) {
            clearTimeout(counter.animationTimeout);
        }

        const updateCount = () => {
            currentFrame++;
            
            const progress = currentFrame / totalFrames;
            const currentCount = Math.round(target * progress);

            if (currentFrame < totalFrames) {
                counter.innerText = prefix + currentCount.toLocaleString() + "+";
                // 把計時器存進 DOM 元素裡，方便下次清除
                counter.animationTimeout = setTimeout(updateCount, frameRate);
            } else {
                counter.innerText = prefix + target.toLocaleString() + "+";
            }
        };

        updateCount();
    });
};

// 使用 Intersection Observer 監控區塊
const observerOptions = {
    threshold: 0.1 // 調低到 0.1，只要露出一點點畫面就開始跑
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 當區塊進入畫面：開始跑動畫
            animateCounters();
        } else {
            // 當區塊離開畫面：強制歸零，準備下一次進場
            const counters = document.querySelectorAll('.counter-value');
            counters.forEach(counter => {
                const prefix = counter.getAttribute('data-prefix') || '';
                counter.innerText = prefix + "0";
                
                // 同時把還沒跑完的動畫停掉，節省瀏覽器效能
                if (counter.animationTimeout) {
                    clearTimeout(counter.animationTimeout);
                }
            });
        }
    });
}, observerOptions);

// 監聽 Impact 區塊
const impactSection = document.querySelector('#impact');
if (impactSection) {
    observer.observe(impactSection);
}