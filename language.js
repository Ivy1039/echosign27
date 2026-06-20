// lang.js
const translations = {
    zh: {
        // --- 導覽列與頁尾 (Navigation & Footer) ---
        nav_home: "首頁",
        nav_programs: "專案計畫",
        nav_volunteer: "加入我們",
        nav_donate: "立即支持",
        nav_about: "關於我們",
        nav_timeline: "發展歷程",
        nav_team: "團隊夥伴",
        nav_storytelling: "樹屋故事時間",
        nav_impact:"影響力",
        footer_rights: "© 2025 Echo Sign. All rights reserved.",

        // --- 首頁 (Index Page) ---
        hero_badge: "青年領軍的聾聽共融計畫",
        hero_title_1: "讓每一份表達",
        hero_title_2: "都被",
        hero_title_highlight: "溫柔聽見",
        hero_desc: "Echo Sign 致力於打破溝通隔閡。我們透過手語圖卡與繪本，搭建聾聽之間的橋樑，創造一個無障礙的溫暖世界。",
        hero_cta_primary: "支持我們",
        hero_cta_secondary: "了解更多",

        hero_badge_help: "已幫助",
        hero_badge_count: "1,000+ 位學童",
        
        impact_title: "我們的影響力",
        impact_1: "透過計畫觸及的聽障人士",
        impact_2: "募集並捐贈給社群的書籍",
        impact_3: "募集到的資金 (美金)",
        impact_4: "企業/組織合作夥伴",
        impact_5: "發放給聽障社群的手語卡套組",

        about_title: "打破「隱形泡泡」的起點",
        about_link: "閱讀更多創辦故事",
        about_content: `
            <p>2021 年，正值新冠肺炎 (COVID-19) 疫情隔離期間，12 歲的 Megan Chen 在家收看電視新聞時，偶然看見了螢幕畫面。她的目光被角落的一位手語翻譯員吸引，
                起初她以為那個人只是隨意地揮動手臂。受到手語翻譯員的啟發並產生了好奇心，Megan 很快了解到，翻譯員的真實角色是為台灣的聽障社群翻譯新聞內容。</p>
            <p>帶著這份興趣，她在那天早晨下定決心要為自己學習手語。這原本只是一項個人愛好，後來演變成一段長達一年半的學習與研究過程，這段旅程開啟了她的視野，
                讓她看見一個與自己截然不同的世界。透過這個學習過程，Megan 開始更深入地了解台灣的聽障社群，並意識到溝通隔閡如何讓他們失去許多常人視為理所當然的機會。</p>
            <p>Megan 在 2023 年將這份熱忱付諸行動，創立了 <strong>EchoSign（小手傳愛）</strong>，這是一個致力於透過雙語教育賦能聽障兒童的非營利組織。EchoSign 從「教育故事屋」起步——
                這是結合了中文、英文與台灣手語 (TSL) 的互動式課程。在每一場活動中，Megan 會透過講述主題故事來教授 6 到 8 個英文單字，隨後搭配 3 到 4 個她親自設計的遊戲，
                讓聽障孩童能在玩樂中學習。這個計畫簡單卻有效：建立自信、提升溝通技巧，並透過語言搭起跨越世界的橋樑。她過去選擇的部分故事包括：《古飛樂》(The Gruffalo)、
                《仙度瑞拉》(Cinderella)、《掃帚上的空間》(Room on The Broom) 等等！（欲查看更完整的往期故事清單與教案，請點擊<a href="programs.html" class="text-rose-500 underline font-bold hover:text-rose-600">這裡</a>！）</p>
            <p>隨著 EchoSign 逐漸擴大，吸引了來自台灣各地的志工加入，Megan 和她的團隊致力於擴充 EchoSign 的計畫，納入了募款活動、社群活動以及更多元化的項目！</p>
            <p>對 Megan 來說，EchoSign 不僅僅是一個組織，它更是一種打破許多人身處其中的隱形「泡泡」的方式——那個限制了我們去理解不同社群的同溫層。她相信，
                作為台灣國際學校社群的一員，學生必須尋求實際的方法來理解並向在地文化學習，並透過盡己所能做出積極貢獻來建立更緊密的連結。</p>
            <p>如今，EchoSign 持續成長，一步步縮減青少年與聽障社群之間的鴻溝，培養同理心，並透過每一個故事、每一場遊戲與每一次對話，創造實質的改變。</p>
        `,

        // --- 捐款頁面 (Donate Page) ---
        donate_title: "成為共融推手，<br>讓改變發生",
        donate_desc: "您的每一筆支持，都將化為身心障礙家庭的一盒手語圖卡，或是社群上的一張教學圖卡。",
        donate_btn: "立即捐款支持",
        donate_item_1: "贊助一盒手語圖卡給身心障礙家庭",

        // --- 專案計畫頁面 (Programs Page) ---
        programs_title: "我們如何傳遞愛",
        programs_subtitle: "從手語教學到社群倡議，探索 Echo Sign 的核心計畫。",
        proj_1_title: "手語圖卡計畫",
        proj_1_desc: "將日常詞彙轉化為精美圖卡，在社群媒體上引起迴響。",
        proj_2_title: "親子手語故事屋",
        proj_2_desc: "透過繪本共讀活動，讓聾聽孩童在故事中相遇。",
        proj_3_title: "國際手語日倡議",
        proj_3_desc: "走入街頭與校園，結合快閃活動與展覽。",
        proj_link: "了解更多",

        // --- 團隊夥伴 ---
        team_page_title: "認識 Echo Sign 團隊",
        team_page_subtitle: "我們是一群充滿熱忱的青年志工，致力於透過手語教學與繪本故事，打破溝通隔閡，創造聾聽共融的溫暖世界。",
    
        // --- 發展歷程 ---
        timeline_page_title: "發展歷程",
        
        // --- 2021 ---
        timeline_1_date: "2021 年",
        timeline_1_title: "起心動念：看見隱形的需求",
        timeline_1_desc: "<p>Megan Chen 在家收看電視新聞時，偶然看見了螢幕畫面。她的目光被角落的一位手語翻譯員吸引，並很快了解到，翻譯員的真實角色是為台灣的聽障社群翻譯新聞內容。</p><p>帶著這份興趣，她在那天早晨下定決心要為自己學習手語。</p>",
        // --- 2022 ---
        t22_1_date: "2022 年 11 月 24 日",
        t22_1_title: "第一場互動故事活動：《古飛樂》",
        t22_1_desc: "<p>超過 30 人參與！這是一場結合英語和手語的雙語故事時間！</p>",
        t22_2_date: "2022 年 12 月 3 日",
        t22_2_title: "第二場互動故事活動：《仙度瑞拉》",
        t22_2_desc: "<p>舉辦了以《仙度瑞拉》(Cinderella) 為主題的雙語互動故事活動。</p>",
        t22_3_date: "2022 年 12 月 4-7 日",
        t22_3_title: "為 TSL 社群募款",
        t22_3_desc: "<p>成功為台灣手語社群 (TSL) 募集了約 800 美元的資金。</p>",
        t22_4_date: "2022 年 12 月 19 日",
        t22_4_title: "舉辦童書募集活動",
        t22_4_desc: "<p>為 TSL 故事樹屋募集童書，豐富孩子們的館藏內容。</p>",

        // --- 2023 ---
        t23_1_date: "2023 年 1 月 3 日",
        t23_1_title: "藝術與手作體驗",
        t23_1_desc: "<p>在 TSL 故事樹屋為孩子們舉辦了藝術與手工作品體驗活動。</p>",
        t23_2_date: "2023 年 3 月 21 日",
        t23_2_title: "《古飛樂的小孩》故事活動",
        t23_2_desc: "<p>帶來了《古飛樂的小孩》(The Gruffalo's Child) 的互動故事時間。</p>",
        t23_3_date: "2023 年 4 月 3 日",
        t23_3_title: "送給孩子們的餅乾禮包",
        t23_3_desc: "<p>親手為故事樹屋的孩子們製作並送上了手工餅乾禮包！</p>",
        t23_4_date: "2023 年 5 月 4 日",
        t23_4_title: "一對一英語家教計畫",
        t23_4_desc: "<p>開始為 12 歲的聽障學童 Karou 進行一對一的英語迷你家教課程！</p>",
        t23_5_date: "2023 年 6 月 7 日",
        t23_5_title: "《三隻小豬》客座老師活動",
        t23_5_desc: "<p>特別邀請 Karou 和 Sandy 擔任客座老師，帶領大家進行《三隻小豬》互動故事活動！</p>",
        t23_6_date: "2023 年 8 月 29 日",
        t23_6_title: "《傑克與魔豆》故事活動",
        t23_6_desc: "<p>超過 30 人熱情參與的《傑克與魔豆》(Jack and the Beanstalk) 互動故事時間！</p>",
        t23_7_date: "2023 年 10 月 1 日",
        t23_7_title: "首個在地商業合作夥伴",
        t23_7_desc: "<p>與 Sogo 百貨內的台灣在地餅乾店展開我們第一次的正式合作！</p>",
        t23_8_date: "2023 年 11 月 17 日",
        t23_8_title: "《兔子的故事》與手作兔子",
        t23_8_desc: "<p>舉辦《兔子的故事》(The Rabbit’s Tale) 活動！我們還一起做了毛茸茸的專屬小兔子。</p>",

        // --- 2024 ---
        t24_1_date: "2024 年 1 月 17 日",
        t24_1_title: "《小紅帽》故事活動",
        t24_1_desc: "<p>帶來經典的《小紅帽》(Little Red Riding Hood) 互動故事時間！</p>",
        t24_2_date: "2024 年 2 月 20 日",
        t24_2_title: "《又窄又小的房子》與手作",
        t24_2_desc: "<p>《又窄又小的房子》(A Squash and a Squeeze) 互動故事活動與手作體驗！</p>",
        t24_3_date: "2024 年 3 月 25 日",
        t24_3_title: "慶祝 TSL 協會生日",
        t24_3_desc: "<p>為 TSL 成員與家庭準備了超過 50 個手工杯子蛋糕，一起歡慶協會生日！</p>",
        t24_4_date: "2024 年 4 月 28 日",
        t24_4_title: "《石頭湯》美味體驗",
        t24_4_desc: "<p>《石頭湯》(Stone Soup) 互動故事活動，我們還一起製作了專屬的美味石頭湯！超好吃！</p>",
        t24_5_date: "2024 年 5 月 18 日",
        t24_5_title: "手語加英語故事時間大升級",
        t24_5_desc: "<p>升級了 TSL 故事時間！加入更多遊戲、更多歌曲，並延長了活動享受的時間！</p>",
        t24_6_date: "2024 年 6 月 25 日",
        t24_6_title: "《火龍阿力》與手作",
        t24_6_desc: "<p>《火龍阿力》(Zog) 互動故事活動與精美手作體驗！</p>",
        t24_7_date: "2024 年 10 月 10 日",
        t24_7_title: "萬聖節特輯：《掃帚上的空間》",
        t24_7_desc: "<p>舉辦了《掃帚上的空間》(Room on The Broom) 萬聖節特別版互動故事活動！</p>",
        t24_8_date: "2024 年 10 月 30 日",
        t24_8_title: "不給糖就搗蛋！提早過萬聖",
        t24_8_desc: "<p>在 TSL 故事樹屋舉辦了迷你的「不給糖就搗蛋」活動，祝大家萬聖節快樂！</p>",
        t24_9_date: "2024 年 11 月 14 日",
        t24_9_title: "手語圖卡計畫提案",
        t24_9_desc: "<p>與 TSL 理事會開會，提案一項免費分發手語圖卡給聽障家庭的新計畫，讓聽障孩童能從小透過互動圖卡學習手語。</p>",
        t24_10_date: "2024 年 11 月 19 日",
        t24_10_title: "《城裡最漂亮的巨人》故事活動",
        t24_10_desc: "<p>帶來了《城裡最漂亮的巨人》(The Smartest Giant in Town) 互動故事活動！</p>",
        t24_11_date: "2024 年 12 月 1 日",
        t24_11_title: "第一堂英語字彙課",
        t24_11_desc: "<p>超過 20 人參與的首堂字彙課！透過互動遊戲教授常用英文單字，最後還準備了餅乾獎勵所有努力學習的孩子們！</p>",

        // --- 2025 ---
        t25_1_date: "2025 年 1 月 20 日",
        t25_1_title: "台北歐洲學校校園推廣",
        t25_1_desc: "<p>與台北歐洲學校合作，在校園內宣傳並提升大眾對手語社群的認識。</p>",
        t25_2_date: "2025 年 2 月 15 日",
        t25_2_title: "CATES 學生領袖會議講者",
        t25_2_desc: "<p>受邀擔任 CATES 學生領袖會議的主題演講者，分享如何與大眾社群建立連結與互動。</p>",
        t25_3_date: "2025 年 3 月 1 日",
        t25_3_title: "圖卡出版籌備會議",
        t25_3_desc: "<p>聯繫在地出版社，並與 TSL 社群理事會開會，討論手語圖卡出版的下一步計畫。</p>",
        t25_4_date: "2025 年 3 月 10 日",
        t25_4_title: "台灣語言節籌劃",
        t25_4_desc: "<p>與 TSL 社群創辦人開會，共同籌劃即將到來的台灣語言節攤位。</p>",
        t25_5_date: "2025 年 3 月 17 日",
        t25_5_title: "台灣語言節義賣攤位",
        t25_5_desc: "<p>在台灣語言節設立攤位，舉辦雞蛋糕義賣，並邀請語言專家進行了一場互動故事活動募款。</p>",
        t25_6_date: "2025 年 3 月 29 日",
        t25_6_title: "獲得兆豐證券贊助",
        t25_6_desc: "<p>與在地銀行兆豐證券合作，並獲得了即將舉辦的攝影活動的部分贊助！</p>",
        t25_7_date: "2025 年 4 月 1 日",
        t25_7_title: "手語圖卡志願拍攝日",
        t25_7_desc: "<p>舉辦了手語圖卡的平面與動態攝影活動，超過 34 個聽障家庭熱情參與志願拍攝。</p>",
        t25_8_date: "2025 年 5 月 11 日",
        t25_8_title: "官方 Instagram 帳號上線",
        t25_8_desc: "<p>正式建立 EchoSign 官方 Instagram 專頁，隨時與大家更新最新計畫！</p>",
        t25_9_date: "2025 年 6 月 28 日",
        t25_9_title: "官方網站啟動",
        t25_9_desc: "<p>EchoSign 官方網站正式上線（持續建置與完善中）！</p>",
        t25_10_date: "2025 年 7 月 16 日",
        t25_10_title: "《瑪菲特小姐》故事活動",
        t25_10_desc: "<p>舉辦了《瑪菲特小姐》(Little Miss Muffet) 互動故事時間！</p>",
        t25_11_date: "2025 年 7 月 23 日",
        t25_11_title: "圖卡專案總整理",
        t25_11_desc: "<p>與 TSL 理事會開會，開始整理照片並撰寫手語圖卡的詳細計畫書，準備郵寄給出版社。</p>",
        t25_12_date: "2025 年 8 月 4 日",
        t25_12_title: "MegansBakery3 義賣合作",
        t25_12_desc: "<p>與 MegansBakery3 展開合作，每售出一片餅乾，將捐出 40% 的利潤給 EchoSign！</p>",
        t25_13_date: "2025 年 8 月 16 日",
        t25_13_title: "DreamGolf 高爾夫體驗日",
        t25_13_desc: "<p>與 DreamGolf 成為合作夥伴，為聽障家庭舉辦了一場免費的高爾夫歡樂體驗日。</p>",

        // --- storytelling ---
        story_page_title:"樹屋故事時間",
        story_page_desc:"這裡有我們最新製作的雙語教案！這些簡報專為聽障家庭設計，每次能提供 1-2 小時的互動故事體驗，同時幫助孩子們學習基礎英文單字。",
        open_slides: "開啟投影片",

        // --- volunteer ---
        vol_hero_title_plain: "小手傳愛，<br>手語無礙",
        vol_hero_subtitle_plain: "Echo Sign是由熱忱的青年志工組成，致力於透過創新的手語教學與繪本故事打破聾聽間的溝通隔閡，打造聾聽共融的世界！誠摯邀請充滿熱忱的你加入，與 Megan 一起小手傳愛！",
        vol_impact_title: "準備好發揮你的<br>影響力了嗎？",
        vol_impact_desc: "成為 Echo Sign 志工，加入充滿創意與同理心的社群。你將學會如何用手語講故事，與聽障家庭建立聯繫，並在這過程中成長為有愛心與領導力的變革者！",
        step1_title: "Step 1: 選擇報名組別",
        step1_desc: "加入我們，成為 Echo Sign 志工！您可以選擇加入活動組或募款組。",
        step1_card1_title: "活動組",
        step1_card1_desc: "由 Grace Chu 帶領活動策劃。協助各類活動，像是參與雙語互動故事屋、創意手作與感官體驗、個別輔導與深度交流及手語圖卡專案等活動。",
        step1_card2_title: "募款組",
        step1_card2_desc: "由 Cameron & Dylan 一同推動募款。募集運作資源、建立合作夥伴關係，並提升社會對聽障社群的關注。",
        step2_title: "Step 2: 填寫表單",
        step1_btn: "填寫志工報名表單",
        step2_desc: "送出申請後請耐心等待，我們將在 2-3 個工作天內與你聯絡。",
        step3_title: "Step 3: 開始行動",
        step3_desc: "這是一個自我成長、回饋社會的絕佳機會，讓我們一起 Echo 愛，為聾聽共融而努力！ :)",
        volunteer_contact: "如有任何疑問，請聯繫：Echosignn29@gmail.com"
    },
    en: {
        // --- Navigation & Footer ---
        nav_home: "Home",
        nav_programs: "Programs",
        nav_volunteer: "Volunteer Today",
        nav_donate: "Donate",
        nav_about:"About Us",
        nav_timeline: "Our story",
        nav_team: "Our collaborators",
        nav_storytelling: "Storytelling Program",
        nav_impact:"impact",
        footer_rights: "© 2025 Echo Sign. All rights reserved.",
        

        // --- Index Page ---
        hero_badge: "Youth-Led Initiative for Inclusion",
        hero_title_1: "Let Every Expression",
        hero_title_2: "Be Gently ",
        hero_title_highlight: "Heard",
        hero_desc: "Echo Sign is dedicated to breaking communication barriers. We build bridges between the deaf and hearing communities through sign language flashcards and picture books.",
        hero_cta_primary: "Donate",
        hero_cta_secondary: "Learn More",

        hero_badge_help: "Helped",
        hero_badge_count: "1,000+ Children",

        impact_title: "Our Impact",
        impact_1: "Hearing impaired reacheHearing imapired individuals reached through our intitiativesd", 
        impact_2: "Books collected and donated to the hearing impaired community", 
        impact_3: "USD Raised by our community to fund events and future programs", 
        impact_4: "Company / organization partnerships", 
        impact_5: "Sign card sets given out to the hearing imapired community",

        about_title: "The Beginning of Breaking the 'Invisible Bubble'",
        about_link: "Read Full Story",
        about_content: `
            <p>In 2021, 12-year-old Megan Chen was at home in quarantine amid the COVID-19 pandemic when she stumbled upon the news on TV. 
                Her attention was drawn to a sign language interpreter on the corner of the screen who she initially thought was waving their arms randomly. 
                Drawn to the sign interpreter and becoming more curious, Megan quickly learned that the interpreter’s actual role was to interpret the news 
                for Taiwan’s deaf community</p>
            <p>Interested, she made up her mind that morning to learn sign language for herself. What began as a personal hobby turned into a year-and-a-half 
                learning and studying process, one that opened her eyes to a world unlike her own. Through this learning process, Megan came to better understand 
                the hearing-impaired community in Taiwan and realized how communication barriers often excluded them from opportunities others take for granted.</p>
            <p>Megan acted on her passion in 2023 and founded <strong>EchoSign</strong> , a non-profit organization dedicated to empowering hearing-impaired 
                children through bilingual education. EchoSign began with Educational Storytelling Sessions—interactive lessons integrating Mandarin, English, 
                and Taiwanese Sign Language. In every session, Megan would teach 6–8 English vocabulary words by telling a theme-based story, followed by 3–4 games 
                she designed herself so hearing impaired children could learn through play. The plan was simple but effective: build confidence, improve 
                communication skills, and bridge worlds through language. Some of the past stories she has chosen are: The Gruffalo, Cinderella, Room on The Broom, 
                and others! (To view a more complete list of past stories and past lesson plans click <a href="programs.html" class="text-rose-500 underline font-bold hover:text-rose-600">HERE</a>!)</p>
            <p>As EchoSign slowly expanded with more volunteers from other parts of Taiwan, Megan and her team worked to expand EchoSign’s programs to include 
                Fundraising events, Community activities, and so much more!</p>
            <p>For Megan, EchoSign is more than an organization—it’s a way to break the invisible “bubble” that many live in, the one that limits our understanding 
                of communities different from our own. She believes that, as members of an international school community in Taiwan, students must seek practical ways 
                to understand and learn from the local culture and foster closer ties by making positive contributions whenever they can.</p>
            <p>Today, EchoSign continues to grow, closing the divide between youth and the hearing impaired community, fostering empathy, and creating tangible 
                change—one narrative, one game, and one conversation at a time.</p>
        `,

        // --- Donate Page ---
        donate_title: "Become an Advocate,<br>Make Change Happen",
        donate_desc: "Your support turns into a sign language flashcards set for families with disabilities or a teaching card on social media.",
        donate_btn: "Donate Now",
        donate_item_1: "Sponsor a set of sign language flashcards for families with disabilities",

        // --- Programs Page ---
        programs_title: "Our Programs",
        programs_subtitle: "From sign language education to community initiatives, explore Echo Sign's core programs.",
        proj_1_title: "Sign Language Flashcards",
        proj_1_desc: "Transforming daily vocabulary into beautiful flashcards, making learning sign language easy.",
        proj_2_title: "Storytelling Sessions",
        proj_2_desc: "Through picture book reading events, deaf and hearing children meet in stories.",
        proj_3_title: "Int'l Sign Day Initiative",
        proj_3_desc: "Walking into streets and campuses with flash mobs and exhibitions to raise awareness.",
        proj_link: "Learn More",
        
        // --- Our Team ---
        team_page_title: "Meet the Echo Sign Team",
        team_page_subtitle: "We are a group of passionate youth volunteers dedicated to breaking communication barriers and creating an inclusive world through sign language education and picture books.",
        

        // --- Timeline Page ---
        timeline_page_title: "Timeline",
        
        // --- 2021 ---
        timeline_1_date: "2021",
        timeline_1_title: "The Beginning of Breaking the 'Invisible Bubble'",
        timeline_1_desc: "<p>12-year-old Megan Chen stumbled upon the news on TV. Drawn to the sign interpreter, Megan quickly learned that the interpreter’s actual role was to interpret the news for Taiwan’s deaf community.</p><p>Interested, she made up her mind that morning to learn sign language for herself.</p>",
        // --- 2022 ---
        t22_1_date: "November 24, 2022",
        t22_1_title: "First Interactive Story Event: The Gruffalo",
        t22_1_desc: "<p>Over 30 participants! Story telling in both English and Sign Language!</p>",
        t22_2_date: "December 3, 2022",
        t22_2_title: "Second Interactive Story Event: Cinderella",
        t22_2_desc: "<p>Hosted our second interactive story event featuring Cinderella.</p>",
        t22_3_date: "December 4-7, 2022",
        t22_3_title: "TSL Community Fundraiser",
        t22_3_desc: "<p>Fundraised about 800 USD for the TSL community.</p>",
        t22_4_date: "December 19, 2022",
        t22_4_title: "Book Drive Event",
        t22_4_desc: "<p>Hosted a book drive for book donations for the TSL storytime tree house.</p>",

        // --- 2023 ---
        t23_1_date: "January 3, 2023",
        t23_1_title: "Arts and Crafts Session",
        t23_1_desc: "<p>Arts and Crafts session at the TSL storytime treehouse.</p>",
        t23_2_date: "March 21, 2023",
        t23_2_title: "The Gruffalo's Child Storytime",
        t23_2_desc: "<p>The Gruffalo's Child interactive storytime session.</p>",
        t23_3_date: "April 3, 2023",
        t23_3_title: "Cookie Bags for Children",
        t23_3_desc: "<p>Made cookie bags for the children in the Storytime Treehouse!</p>",
        t23_4_date: "May 4, 2023",
        t23_4_title: "1-1 Tutoring Session",
        t23_4_desc: "<p>Started a mini 1-1 tutoring session with Karou, a hearing impaired 12-year-old, for English!</p>",
        t23_5_date: "June 7, 2023",
        t23_5_title: "The 3 Little Pigs Storytime",
        t23_5_desc: "<p>The 3 little pigs Interactive storytime session with guest teachers Karou and Sandy!</p>",
        t23_6_date: "August 29, 2023",
        t23_6_title: "Jack and the Beanstalk Storytime",
        t23_6_desc: "<p>Jack and the Beanstalk interactive storytime session with over 30 participants!</p>",
        t23_7_date: "October 1, 2023",
        t23_7_title: "First Local Partnership",
        t23_7_desc: "<p>Launched our first partnership with a local Taiwanese cookie shop in Sogo!</p>",
        t23_8_date: "November 17, 2023",
        t23_8_title: "The Rabbit’s Tale Storytime",
        t23_8_desc: "<p>The Rabbit’s Tale Interactive Story event! Made our own fuzzy rabbit.</p>",

        // --- 2024 ---
        t24_1_date: "January 17, 2024",
        t24_1_title: "Little Red Riding Hood Storytime",
        t24_1_desc: "<p>Little Red Riding hood interactive storytime session!</p>",
        t24_2_date: "February 20, 2024",
        t24_2_title: "A Squash and a Squeeze Storytime",
        t24_2_desc: "<p>A Squash and a Squeeze interactive storytime session with arts and crafts!</p>",
        t24_3_date: "March 25, 2024",
        t24_3_title: "TSL Association Birthday",
        t24_3_desc: "<p>Celebrated TSL association's Birthday and brought over 50 homemade cupcakes for members and families!</p>",
        t24_4_date: "April 28, 2024",
        t24_4_title: "Stone Soup Storytime",
        t24_4_desc: "<p>Stone Soup interactive storytime session and made our own version of stone soup! Yummy!</p>",
        t24_5_date: "May 18, 2024",
        t24_5_title: "Storytime Session Upgrade",
        t24_5_desc: "<p>Updating Sign+ English TSL Storytime session classtime with more games, more songs, and a longer duration!</p>",
        t24_6_date: "June 25, 2024",
        t24_6_title: "Zog Storytime",
        t24_6_desc: "<p>Zog interactive storytime session with arts and crafts!</p>",
        t24_7_date: "October 10, 2024",
        t24_7_title: "Room on The Broom Halloween Special",
        t24_7_desc: "<p>Room on The broom interactive story time session Halloween Special!</p>",
        t24_8_date: "October 30, 2024",
        t24_8_title: "Early Halloween Celebration",
        t24_8_desc: "<p>Mini Trick or Treat at TSL Storytime treehouse. Happy Early Halloween!</p>",
        t24_9_date: "November 14, 2024",
        t24_9_title: "Sign Cards Project Proposal",
        t24_9_desc: "<p>Meeting with the TSL board committee proposing a new project about sign cards to distribute out to hearing impaired families free of charge so hearing impaired kids can learn sign language through interactive cards at an early age.</p>",
        t24_10_date: "November 19, 2024",
        t24_10_title: "The Smartest Giant in Town Storytime",
        t24_10_desc: "<p>The Smartest Giant in Town Interactive Storytime session!</p>",
        t24_11_date: "December 1, 2024",
        t24_11_title: "First Vocabulary Class",
        t24_11_desc: "<p>First Vocabulary Class with over 20 participants teaching common English vocabulary through interactive games! Cookies at the end for all our hardworking kids!</p>",

        // --- 2025 ---
        t25_1_date: "January 20, 2025",
        t25_1_title: "Taipei European School Collaboration",
        t25_1_desc: "<p>Collaborated with Taipei European School to spread awareness on the sign language community on campus.</p>",
        t25_2_date: "February 15, 2025",
        t25_2_title: "CATES Keynote Speaker",
        t25_2_desc: "<p>Invited to be a CATES student leaders conference keynote speaker on engaging with the general community.</p>",
        t25_3_date: "March 1, 2025",
        t25_3_title: "Publishing Meeting",
        t25_3_desc: "<p>Reached out to a local publishing company and had a meeting with the general board of the TSL community on next steps of Sign language cards publishing.</p>",
        t25_4_date: "March 10, 2025",
        t25_4_title: "Taiwan Language Festival Prep",
        t25_4_desc: "<p>Meeting with Founder of the TSL community to plan our booth for the Taiwan Language Festival.</p>",
        t25_5_date: "March 17, 2025",
        t25_5_title: "Taiwan Language Festival Booth",
        t25_5_desc: "<p>Taiwan Language Festival booth set up 雞蛋糕 (Egg cake) fundraiser as well as invited a language specialist for an interactive storytime session.</p>",
        t25_6_date: "March 29, 2025",
        t25_6_title: "Bank Sponsorship",
        t25_6_desc: "<p>Collaborated with 兆豐證券公司 a local bank and received partial sponsorship for our upcoming photo shoot session!</p>",
        t25_7_date: "April 1, 2025",
        t25_7_title: "Sign Cards Photo Shoot",
        t25_7_desc: "<p>Photo and Video shoot session for Sign Cards with over 34 hearing impaired families volunteering.</p>",
        t25_8_date: "May 11, 2025",
        t25_8_title: "EchoSign Instagram Launch",
        t25_8_desc: "<p>Established an official EchoSign instagram page to update on new projects!</p>",
        t25_9_date: "June 28, 2025",
        t25_9_title: "Official Website Launch",
        t25_9_desc: "<p>EchoSign official website launch but still under construction!</p>",
        t25_10_date: "July 16, 2025",
        t25_10_title: "Little Miss Muffet Storytime",
        t25_10_desc: "<p>Little Miss Muffet interactive storytime session!</p>",
        t25_11_date: "July 23, 2025",
        t25_11_title: "Sign Card Project Planning",
        t25_11_desc: "<p>Meeting with the TSl board committee to start to put together photos and write out a plan for the sign language card project to mail to the publisher.</p>",
        t25_12_date: "August 4, 2025",
        t25_12_title: "MegansBakery3 Collaboration",
        t25_12_desc: "<p>Collab with MegansBakery3 with 40% of profits given to EchoSign for each cookie they sell!</p>",
        t25_13_date: "August 16, 2025",
        t25_13_title: "DreamGolf Fun Day",
        t25_13_desc: "<p>Partnered with DreamGolf hosting a free golf fun day experience for hearing impaired families.</p>",
    
        // --- storytelling ---
        story_page_title:"Treehouse story time sessions",
        story_page_desc:"Here are our latest lesson plans! These slides are made and planned with care to deliver a 1-2 hour interactive story session for hearing impaired families and at the same time help children learn basic English vocabulary!",
        open_slides: "Open Slides",

        // --- volunteer ---
        vol_hero_title_plain: "Spread Love, Hands in Harmony",
        vol_hero_subtitle_plain: "Echo Sign is a passionate youth volunteer team dedicated to breaking communication barriers through creative sign language teaching and picture books. We invite you to join us and Megan to spread love and echo inclusion!",
        vol_impact_title: "Ready to Make<br>an Impact?",
        vol_impact_desc: "Join Echo Sign to become part of a creative and empathetic community. You'll learn sign language storytelling, connect with deaf families, and grow as a leader and changemaker!",
        step1_title: "Step 1: Choose Your Team",
        step1_desc: "Join Echo Sign! You can choose to join either the Events Team or the Fundraising Team.",
        step1_card1_title: "Events Team",
        step1_card1_desc: "Led by Grace Chu. You'll help plan interactive storytelling sessions, arts and crafts workshops, 1-on-1 tutoring, and our sign language flashcard project.",
        step1_card2_title: "Fundraising Team",
        step1_card2_desc: "Led by Cameron & Dylan. You'll help raise resources, build partnerships, and raise awareness for the hearing impaired community.",
        step2_title: "Step 2: Fill Out the Form",
        step1_btn: "Volunteer Registration Form",
        step2_desc: "After submitting your application, please wait 2-3 business days for us to contact you.",
        step3_title: "Step 3: Take Action",
        step3_desc: "This is a great opportunity for self-growth and giving back. Let's echo love together for a more inclusive world! :)",
        volunteer_contact: "For any inquiries, please contact: Echosignn29@gmail.com",
    }
};