import { SmileIcon, TruckIcon, CreditCardIcon, MoneyIcon, NoteIcon } from "../components/icons"

export default function ShoppingGuideContent() {
    return(
			<div className="shopping-guide-wrap">
				<div className="shopping-notes-wrap">
					<h1 className="shopping-guide-title">購物須知</h1>
					<p className="shopping-guide-text shopping-guide-text-notes">咖雞煮提供您最優質的食材、最貼心的服務，每項蔬果調味料都是經由咖雞煮嚴格挑選出的優質產品。同時為客人打造多樣食材包，接單後經過嚴謹的程序，打造出完美的佳餚。我們的產品都是由專人運送，限時送達，讓您馬上可以輕鬆端出五菜一湯，親子晚餐、家人聚餐，都能輕鬆開飯。</p>
				</div>

				<div className="shopping-delivery-info-wrap">
					<TruckIcon />
					<h1 className="shopping-guide-title">配送資訊</h1>
					<h2 className="shopping-guide-title--sec">目前僅提供台灣本島配送</h2>
					<p className="shopping-guide-text">送達日期：晚上22:00前訂購，最快12小時到貨。（可預定其他到貨日期）</p>
					<div className="shopping-delivery-info-notifiaction">
						<p className="shopping-guide-text"><SmileIcon />每日晚上 22:00進行訂單結算；22:00後即歸屬於隔日訂單。</p>
						<p className="shopping-guide-text"><SmileIcon />如原到貨日遇已滿單，將順延最近的可到貨日到貨，並簡訊/電話通知。</p>
					</div>
				</div>

				<div className="shopping-delivery-time-wrap">
					<h1 className="shopping-guide-title">送達時間</h1>
					<p className="shopping-guide-text">
					請於購物車頁面「填寫送達日期、時段或其他說明事項」欄位填寫到貨時間。<br/>

					＊填寫格式：送達日期+時間段，例如9月3日下午13點~17點到貨，<br/>

					請填寫「9/3,13:00-17:00」<br/>

					配送時段：<br/>

					13:00-17:00<br/>

					17:00-20:00<br/>

					＊若無填寫到貨日期及時段，一律 13-17時到貨。<br/>
					＊到貨時間務必要有人在地址收貨哦，謝謝。
					</p>
				</div>

				<div className="shopping-payment-method-wrap">
					<h1 className="shopping-guide-title">付款方式</h1>
					<div className="shopping-payment-method-icon-wrap">
						<div>
							<CreditCardIcon />
							<p className="shopping-payment-method-text">信用卡支付</p>
						</div>
						<div className="shopping-payment-method-cash-wrap">
							<MoneyIcon />
							<p className="shopping-payment-method-text">現金支付</p>
						</div>
					</div>
					<p className="shopping-guide-text">
						信用卡支付：<br/>

						藍新金流信用卡付款(支援VISA／MasterCard／JCB)<br/>

						信用卡一次付清<br/>

						分期0利率：3期分期(玉山銀行、台新銀行、中國信託銀行 )<br/>

						信用卡紅利折抵刷卡金(日盛,永豐,兆豐,元大,安泰,合作,上海商銀,第一銀行,匯豐,國泰,澳盛,凱基,星展,富邦,台新,玉山) 信用卡紅利折抵辦法<br/>

						現金支付：<br/>

						貨到付款(專人代收貨款)<br/>

						＊本站所有交易與個人相關資料皆已受到保護，會員可安心訂購。
					</p>
				</div>

				<div className="shopping-order-info-wrap">
					<NoteIcon />
					<h1 className="shopping-guide-title">訂單完成</h1>
					<p className="shopping-guide-text">
						訂單提交確認後，您將會收到一封訂單完成通知郵件。<br/>

						​請注意！咖雞煮 保留訂單接受與否的權利。<br/>

						(生鮮蔬果肉品因季節及氣候因素，供貨量有時不穩，若該筆訂單商品遇缺貨，將自動刪除品項，並由客服專員Email或電話通知，造成您的不便，敬請見諒。)
					</p>
				</div>
			</div>
    );
}