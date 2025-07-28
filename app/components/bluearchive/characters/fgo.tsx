import React, { useEffect, useState, memo } from "react";


export const FGO = () => {
    return (
        <div className="ServantInfoWrapper">
            <div className="ServantInfoHeader border-b border-gray-400 mb-2">
                <div className="ServantInfoClass">
                    <span typeof="mw:File">
                        <a href="/wiki/Avenger" title="Avenger">
                            <img
                                src="https://static.wikia.nocookie.net/fategrandorder/images/c/c7/Class-Avenger-Gold.webp"
                                decoding="async"
                                loading="lazy"
                                width="50"
                                height="50"
                                className="mw-file-element lazyloaded"
                                data-image-name="Class-Avenger-Gold.webp"
                                data-image-key="Class-Avenger-Gold.webp"
                                data-relevant="0"
                                data-src="https://static.wikia.nocookie.net/fategrandorder/images/c/c7/Class-Avenger-Gold.webp"
                                alt="Avenger Class"
                            />
                        </a>
                    </span>
                </div>
                <div className="ServantInfoStars text-yellow-500 mt-1">
                    <span className="rarity_star">★ ★ ★ ★ ★</span>
                </div>
                <p className="ServantInfoName text-2xl font-bold">
                    Jeanne d'Arc (Alter)
                </p>
            </div>
            <div className="ServantInfoMain">
                <div className="ServantInfoAsideWrapper">
                    <p></p>
                    <aside
                        role="region"
                        className="portable-infobox pi-background pi-border-color pi-theme-wikia pi-layout-default"
                    >
                        <div className="pi-image-collection wds-tabber" data-source="image">
                            <div className="wds-tabs__wrapper">
                                <div className="wds-tabs__arrow-left">
                                    <svg className="wds-icon wds-icon-tiny">
                                        <use href="#wds-icons-menu-control-tiny"></use>
                                    </svg>
                                </div>
                                <ul className="wds-tabs" role="tablist">
                                    <li
                                        className="wds-tabs__tab wds-is-current"
                                        tabIndex={0}
                                        aria-selected="true"
                                    >
                                        <span className="wds-tabs__tab-label">Stage 1</span>
                                    </li>
                                    <li
                                        className="wds-tabs__tab"
                                        tabIndex={-1}
                                        aria-selected="false"
                                    >
                                        <span className="wds-tabs__tab-label">Stage 2</span>
                                    </li>
                                    <li
                                        className="wds-tabs__tab"
                                        tabIndex={-1}
                                        aria-selected="false"
                                    >
                                        <span className="wds-tabs__tab-label">Stage 3</span>
                                    </li>
                                    <li
                                        className="wds-tabs__tab"
                                        tabIndex={-1}
                                        aria-selected="false"
                                    >
                                        <span className="wds-tabs__tab-label">Stage 4</span>
                                    </li>
                                    <li
                                        className="wds-tabs__tab"
                                        tabIndex={-1}
                                        aria-selected="false"
                                    >
                                        <span className="wds-tabs__tab-label">Costume 1</span>
                                    </li>
                                    <li
                                        className="wds-tabs__tab"
                                        tabIndex={-1}
                                        aria-selected="false"
                                    >
                                        <span className="wds-tabs__tab-label">Stage 1</span>
                                    </li>
                                    <li
                                        className="wds-tabs__tab"
                                        tabIndex={-1}
                                        aria-selected="false"
                                    >
                                        <span className="wds-tabs__tab-label">Stage 2</span>
                                    </li>
                                    <li
                                        className="wds-tabs__tab"
                                        tabIndex={-1}
                                        aria-selected="false"
                                    >
                                        <span className="wds-tabs__tab-label">Stage 3</span>
                                    </li>
                                    <li
                                        className="wds-tabs__tab"
                                        tabIndex={-1}
                                        aria-selected="false"
                                    >
                                        <span className="wds-tabs__tab-label">
                                            Costume 1 Sprite
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
        
    );
};
