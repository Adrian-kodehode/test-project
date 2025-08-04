import React, { useEffect, useState, memo } from "react";


export const FGO = () => {
    return (
   <div className="ServantInfoWrapper">
	<div className="ServantInfoHeader border-b border-gray-400 mb-2">
<div className="ServantInfoClass"><span typeof="mw:File"><a href="/wiki/Avenger" title="Avenger"><img src="https://static.wikia.nocookie.net/fategrandorder/images/c/c7/Class-Avenger-Gold.webp/revision/latest/scale-to-width-down/50?cb=20250521135525" decoding="async" loading="lazy" width="50" height="50" className="mw-file-element ls-is-cached lazyloaded" data-image-name="Class-Avenger-Gold.webp" data-image-key="Class-Avenger-Gold.webp" data-relevant="0" data-src="https://static.wikia.nocookie.net/fategrandorder/images/c/c7/Class-Avenger-Gold.webp/revision/latest/scale-to-width-down/50?cb=20250521135525" /></a></span></div>
<div className="ServantInfoStars text-yellow-500 mt-1"><span className="rarity_star">★ ★ ★ ★ ★</span></div>
	<p className="ServantInfoName text-2xl font-bold"><b>Jeanne d'Arc (Alter)</b>
	</p>
	</div>
<div className="ServantInfoMain">
	<div className="ServantInfoAsideWrapper">
<p>
</p><aside role="region" className="portable-infobox pi-background pi-border-color pi-theme-wikia pi-layout-default">
	<div className="pi-image-collection wds-tabber" data-source="image">
		<div className="wds-tabs__wrapper"><div className="wds-tabs__arrow-left"><svg className="wds-icon wds-icon-tiny">
<use href="#wds-icons-menu-control-tiny"></use>
</svg></div>
			<ul className="wds-tabs" role="tablist">
				
					<li className="wds-tabs__tab wds-is-current" tabIndex={0} aria-selected="true">
						<span className="wds-tabs__tab-label">
							Stage 1
							
						</span>
					</li>
				
					<li className="wds-tabs__tab" tabIndex={-1} aria-selected="false">
						<span className="wds-tabs__tab-label">
							Stage 2
							
						</span>
					</li>
				
					<li className="wds-tabs__tab" tabIndex={-1} aria-selected="false">
						<span className="wds-tabs__tab-label">
							Stage 3
							
						</span>
					</li>
				
					<li className="wds-tabs__tab" tabIndex={-1} aria-selected="false">
						<span className="wds-tabs__tab-label">
							Stage 4
							
						</span>
					</li>
				
					<li className="wds-tabs__tab" tabIndex={-1} aria-selected="false">
						<span className="wds-tabs__tab-label">
							Costume 1
							
						</span>
					</li>
				
					<li className="wds-tabs__tab" tabIndex={-1} aria-selected="false">
						<span className="wds-tabs__tab-label">
							Stage 1
							
						</span>
					</li>
				
					<li className="wds-tabs__tab" tabIndex={-1} aria-selected="false">
						<span className="wds-tabs__tab-label">
							Stage 2
							
						</span>
					</li>
				
					<li className="wds-tabs__tab" tabIndex={-1} aria-selected="false">
						<span className="wds-tabs__tab-label">
							Stage 3
							
						</span>
					</li>
				
					<li className="wds-tabs__tab" tabIndex={-1} aria-selected="false">
						<span className="wds-tabs__tab-label">
							Costume 1 Sprite
							
						</span>
					</li>
				
			</ul>
		<div className="wds-tabs__arrow-right"><svg className="wds-icon wds-icon-tiny">
<use href="#wds-icons-menu-control-tiny"></use>
</svg></div></div>
		
			<div className="wds-tab__content wds-is-current">
				<figure className="pi-item pi-image">
					<a href="https://static.wikia.nocookie.net/fategrandorder/images/7/76/S106_Stage1.webp/revision/latest?cb=20220911061752" className="image image-thumbnail" title="Stage 1">
						<img src="https://static.wikia.nocookie.net/fategrandorder/images/7/76/S106_Stage1.webp/revision/latest/scale-to-width-down/268?cb=20220911061752" srcSet="https://static.wikia.nocookie.net/fategrandorder/images/7/76/S106_Stage1.webp/revision/latest/scale-to-width-down/268?cb=20220911061752 1x, https://static.wikia.nocookie.net/fategrandorder/images/7/76/S106_Stage1.webp/revision/latest?cb=20220911061752 2x" data-relevant="1" className="pi-image-thumbnail" alt="Stage 1" width="270" height="382" data-image-key="S106 Stage1.webp" data-image-name="S106 Stage1.webp" />
						
					</a>
				</figure>
			</div>
		
			<div className="wds-tab__content">
				<figure className="pi-item pi-image">
					<a href="https://static.wikia.nocookie.net/fategrandorder/images/1/11/S106_Stage2.webp/revision/latest?cb=20220911061742" className="image image-thumbnail" title="Stage 2">
						<img src="https://static.wikia.nocookie.net/fategrandorder/images/1/11/S106_Stage2.webp/revision/latest/scale-to-width-down/268?cb=20220911061742" srcSet="https://static.wikia.nocookie.net/fategrandorder/images/1/11/S106_Stage2.webp/revision/latest/scale-to-width-down/268?cb=20220911061742 1x, https://static.wikia.nocookie.net/fategrandorder/images/1/11/S106_Stage2.webp/revision/latest?cb=20220911061742 2x" data-relevant="1" className="pi-image-thumbnail" alt="Stage 2" width="270" height="382" data-image-key="S106 Stage2.webp" data-image-name="S106 Stage2.webp" />
						
					</a>
				</figure>
			</div>
		
			<div className="wds-tab__content">
				<figure className="pi-item pi-image">
					<a href="https://static.wikia.nocookie.net/fategrandorder/images/4/43/S106_Stage3.webp/revision/latest?cb=20220911061727" className="image image-thumbnail" title="Stage 3">
						<img src="https://static.wikia.nocookie.net/fategrandorder/images/4/43/S106_Stage3.webp/revision/latest/scale-to-width-down/268?cb=20220911061727" srcSet="https://static.wikia.nocookie.net/fategrandorder/images/4/43/S106_Stage3.webp/revision/latest/scale-to-width-down/268?cb=20220911061727 1x, https://static.wikia.nocookie.net/fategrandorder/images/4/43/S106_Stage3.webp/revision/latest?cb=20220911061727 2x" data-relevant="1" className="pi-image-thumbnail" alt="Stage 3" width="270" height="382" data-image-key="S106 Stage3.webp" data-image-name="S106 Stage3.webp" />
						
					</a>
				</figure>
			</div>
		
			<div className="wds-tab__content">
				<figure className="pi-item pi-image">
					<a href="https://static.wikia.nocookie.net/fategrandorder/images/8/8a/S106_Stage4.webp/revision/latest?cb=20220911061659" className="image image-thumbnail" title="Stage 4">
						<img src="https://static.wikia.nocookie.net/fategrandorder/images/8/8a/S106_Stage4.webp/revision/latest/scale-to-width-down/268?cb=20220911061659" srcSet="https://static.wikia.nocookie.net/fategrandorder/images/8/8a/S106_Stage4.webp/revision/latest/scale-to-width-down/268?cb=20220911061659 1x, https://static.wikia.nocookie.net/fategrandorder/images/8/8a/S106_Stage4.webp/revision/latest?cb=20220911061659 2x" data-relevant="1" className="pi-image-thumbnail" alt="Stage 4" width="270" height="382" data-image-key="S106 Stage4.webp" data-image-name="S106 Stage4.webp" />
						
					</a>
				</figure>
			</div>
		
			<div className="wds-tab__content">
				<figure className="pi-item pi-image">
					<a href="https://static.wikia.nocookie.net/fategrandorder/images/1/1a/S106_Costume1.webp/revision/latest?cb=20220911061623" className="image image-thumbnail" title="Costume 1">
						<img src="https://static.wikia.nocookie.net/fategrandorder/images/1/1a/S106_Costume1.webp/revision/latest/scale-to-width-down/268?cb=20220911061623" srcSet="https://static.wikia.nocookie.net/fategrandorder/images/1/1a/S106_Costume1.webp/revision/latest/scale-to-width-down/268?cb=20220911061623 1x, https://static.wikia.nocookie.net/fategrandorder/images/1/1a/S106_Costume1.webp/revision/latest?cb=20220911061623 2x" data-relevant="1" className="pi-image-thumbnail" alt="Costume 1" width="270" height="382" data-image-key="S106 Costume1.webp" data-image-name="S106 Costume1.webp" />
						
					</a>
				</figure>
			</div>
		
			<div className="wds-tab__content">
				<figure className="pi-item pi-image">
					<a href="https://static.wikia.nocookie.net/fategrandorder/images/9/9e/S106_Sprite_Ver3_Stage1.png/revision/latest?cb=20241003151635" className="image image-thumbnail" title="Stage 1">
						<img src="https://static.wikia.nocookie.net/fategrandorder/images/9/9e/S106_Sprite_Ver3_Stage1.png/revision/latest/scale-to-width-down/268?cb=20241003151635" srcSet="https://static.wikia.nocookie.net/fategrandorder/images/9/9e/S106_Sprite_Ver3_Stage1.png/revision/latest/scale-to-width-down/268?cb=20241003151635 1x, https://static.wikia.nocookie.net/fategrandorder/images/9/9e/S106_Sprite_Ver3_Stage1.png/revision/latest/scale-to-width-down/536?cb=20241003151635 2x" data-relevant="1" className="pi-image-thumbnail" alt="Stage 1" width="270" height="270" data-image-key="S106 Sprite Ver3 Stage1.png" data-image-name="S106 Sprite Ver3 Stage1.png" />
						
					</a>
				</figure>
			</div>
		
			<div className="wds-tab__content">
				<figure className="pi-item pi-image">
					<a href="https://static.wikia.nocookie.net/fategrandorder/images/c/cb/S106_Sprite_Ver3_Stage2.png/revision/latest?cb=20241003151642" className="image image-thumbnail" title="Stage 2">
						<img src="https://static.wikia.nocookie.net/fategrandorder/images/c/cb/S106_Sprite_Ver3_Stage2.png/revision/latest/scale-to-width-down/268?cb=20241003151642" srcSet="https://static.wikia.nocookie.net/fategrandorder/images/c/cb/S106_Sprite_Ver3_Stage2.png/revision/latest/scale-to-width-down/268?cb=20241003151642 1x, https://static.wikia.nocookie.net/fategrandorder/images/c/cb/S106_Sprite_Ver3_Stage2.png/revision/latest/scale-to-width-down/536?cb=20241003151642 2x" data-relevant="1" className="pi-image-thumbnail" alt="Stage 2" width="270" height="270" data-image-key="S106 Sprite Ver3 Stage2.png" data-image-name="S106 Sprite Ver3 Stage2.png" />
						
					</a>
				</figure>
			</div>
		
			<div className="wds-tab__content">
				<figure className="pi-item pi-image">
					<a href="https://static.wikia.nocookie.net/fategrandorder/images/5/5f/S106_Sprite_Ver3_Stage3.png/revision/latest?cb=20241003151648" className="image image-thumbnail" title="Stage 3">
						<img src="https://static.wikia.nocookie.net/fategrandorder/images/5/5f/S106_Sprite_Ver3_Stage3.png/revision/latest/scale-to-width-down/268?cb=20241003151648" srcSet="https://static.wikia.nocookie.net/fategrandorder/images/5/5f/S106_Sprite_Ver3_Stage3.png/revision/latest/scale-to-width-down/268?cb=20241003151648 1x, https://static.wikia.nocookie.net/fategrandorder/images/5/5f/S106_Sprite_Ver3_Stage3.png/revision/latest/scale-to-width-down/536?cb=20241003151648 2x" data-relevant="1" className="pi-image-thumbnail" alt="Stage 3" width="270" height="270" data-image-key="S106 Sprite Ver3 Stage3.png" data-image-name="S106 Sprite Ver3 Stage3.png" />
						
					</a>
				</figure>
			</div>
		
			<div className="wds-tab__content">
				<figure className="pi-item pi-image">
					<a href="https://static.wikia.nocookie.net/fategrandorder/images/b/b8/S106_Sprite_Ver3_Costume1.png/revision/latest?cb=20241003151653" className="image image-thumbnail" title="Costume 1 Sprite">
						<img src="https://static.wikia.nocookie.net/fategrandorder/images/b/b8/S106_Sprite_Ver3_Costume1.png/revision/latest/scale-to-width-down/268?cb=20241003151653" srcSet="https://static.wikia.nocookie.net/fategrandorder/images/b/b8/S106_Sprite_Ver3_Costume1.png/revision/latest/scale-to-width-down/268?cb=20241003151653 1x, https://static.wikia.nocookie.net/fategrandorder/images/b/b8/S106_Sprite_Ver3_Costume1.png/revision/latest/scale-to-width-down/536?cb=20241003151653 2x" data-relevant="1" className="pi-image-thumbnail" alt="Costume 1 Sprite" width="270" height="270" data-image-key="S106 Sprite Ver3 Costume1.png" data-image-name="S106 Sprite Ver3 Costume1.png" />
						
					</a>
				</figure>
			</div>
		
	</div>


</aside>

<p></p>
    </div>
    <div className="ServantInfoStatsWrapper">
<table className="closetable">
<tbody><tr>
<td colSpan={2}><b>Japanese Name:</b>  <span lang="jp">ジャンヌ・ダルク〔オルタ〕</span>
</td></tr>

<tr>
<td><b><a href="/wiki/Attributes" title="Attributes">Attribute</a>:</b>&nbsp;<a href="/wiki/Category:Man" title="Category:Man">Man</a>
</td>
<td><b><a href="/wiki/Leveling#Growth_Curves" title="Leveling">Growth Curve</a>:</b>   S
</td></tr>

<tr>
<td colSpan={2}><b>Gender:</b> <a href="/wiki/Category:Female" title="Category:Female">Female</a>
</td></tr>
<tr>
<td colSpan={2}><b>Basic <a href="/wiki/Traits" title="Traits">Traits</a>:</b> <a href="/wiki/Category:Artoria_Face" title="Category:Artoria Face">Artoria Face</a>,&nbsp;<a href="/wiki/Category:Costume-Owning" title="Category:Costume-Owning">Costume-Owning</a>,&nbsp;<a href="/wiki/Category:Hominidae_Servant" title="Category:Hominidae Servant">Hominidae Servant</a>,&nbsp;<a href="/wiki/Category:Humanoid" title="Category:Humanoid">Humanoid</a>,&nbsp;<a href="/wiki/Category:Servant" title="Category:Servant">Servant</a>,&nbsp;<a href="/wiki/Category:Weak_to_Enuma_Elish" title="Category:Weak to Enuma Elish">Weak to Enuma Elish</a>
</td></tr>







<tr>
<th colSpan={2}><div style={{ margin: '5px 0 0 0' }}><span typeof="mw:File"><a href="/wiki/Sub:Servant_Command_Cards_List" title="Sub:Servant Command Cards List"><img src="https://static.wikia.nocookie.net/fategrandorder/images/b/be/QAABB.webp" decoding="async" loading="lazy" width="440" height="87" className="mw-file-element ls-is-cached lazyloaded" data-image-name="QAABB.webp" data-image-key="QAABB.webp" data-relevant="0" data-src="https://static.wikia.nocookie.net/fategrandorder/images/b/be/QAABB.webp/"/></a></span></div>
</th></tr>


</tbody></table>
  </div>
</div>
<table className="ServantInfoNav">

<tbody><tr style={{height:'35px'}}>
<td className="celldivider"><a href="#Active_Skills">Active Skills</a>
</td>
<td className="celldivider"><a href="#Passive_Skills">Passive Skills</a>
</td>
<td className="celldivider"><a href="#Append_Skills">Append Skills</a>
</td>
<td className="celldivider"><a href="#Noble_Phantasm">Noble Phantasm</a>
</td>
<td className="celldivider lastcell"><a href="#Ascension">Ascension</a>
</td></tr>
<tr style={{height:'35px'}}>
<td><a href="#Skill_Reinforcement">Skill Upgrade</a>
</td>
<td><a href="#Stats">Stats</a>
</td>
<td><a href="#Bond_Level">Bond Level</a>
</td>
<td><a href="#Biography">Biography</a>
</td>
<td className="lastcell"><a href="#Trivia">Trivia</a>
</td></tr></tbody></table>
</div>
        
    );
};
