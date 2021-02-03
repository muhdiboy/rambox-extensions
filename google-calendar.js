function applycss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}

applycss(`

/* Invert the entire website */
    html {
        -webkit-filter: invert(90%) hue-rotate(180deg)!important;
        filter: invert(90%) hue-rotate(180deg)!important;
        background: rgb(25, 25, 25)!important;
    }

    /* ==== GENERAL ==== */
    /* "+ button" in the month view */
    .XHsn7e {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Inversion of task panel on the right hand side */
    .YqtBEc,
    .xuBVOe {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Dark blue top of right hand panel and black text */
    .CflnFb {
        background-color: #7b96c1!important;
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
        color: white!important;
    }

    .h5t3Nc .GrK4Mb,
    .h5t3Nc .hVDHke,
    .h5t3Nc .l7VQxb,
    .h5t3Nc .zP0T0b,
    .h5t3Nc .qNixLe {
        border-color: white;
        background-color: #c9c9c9;
    }

    /* Color change of event deleted panel */
    .lq96Td {
        background-color: #003e3a!important;
        color: white!important;
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* "View recently deleted items" color */
    .GooADb {
        color: #9dceff!important;
        text-shadow: 0.0px 0.0px #404040!important;
    }

    /* Opacity reduction of the background color while adding an event */
    .bJZIjf.qs41qe {
        opacity: 0.3;
    }

    /* Fix of the Google menu with apps*/
    #gb a.gb_ja,
    #gb a.gb_ja:visited,
    #gb a.gb_ja:active,
    #gb a.gb_ka,
    #gb a.gb_ka:visited {
        color: rgba(255, 255, 255, 0.87)!important;
        text-decoration: none!important;
        background-color: black!important;
    }

    .gb_3 {
        font-weight: 600!important;
    }

    /* Inversion of event action pop up (saved, updated, deleted etc.)*/
    .Mh0NNb {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Color of event action pop up (saved, updated, deleted etc.)*/
    .M6tHv {
        background-color: #444444!important;
    }

    /* Inversion of notification panel */
    #I0_1513527137275 {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) contrast(105%)!important;
    }

    /* Inversion of apps icons */
    .gb_W {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) contrast(105%)!important;
    }

    /* Background color of "More" button in Google Apps menu */
    .gb_ea.gb_6f {
        background-color: #e8e8e8!important;
    }

    .ck4bY {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Update to white color of the icons next to avatar */
    .gb_yc svg,
    .gb_kc svg {
        color: white;
        opacity: .54;
    }

    /* Inversion of icons in the search bar */
    .asor.asor_i0,
    .gsoi.gsoi_w,
    .gsoi.gsoi_c.asor_v,
    .gsoi.gsoi_9.asor_v,
    .gsoi.gsoi_7.asor_v {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Inversion of images, svg graphics (avatars, icons) */
    *:not([data-date]):before,
    img,
    svg {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) contrast(105%)!important;
    }

    /* Inversion of guest avatars attending the event */
    .jPtXgd {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) contrast(105%)!important;
    }

    /* Menu uninversion of uploading attachment from Google Drive (the id's are not static and this function doesn't always work) */
    #vqd3vxfo4jpl,
    #pnsketfj08m {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Change of arrow color in the settings menu*/
    .gb_yc svg,
    .gb_kc svg {
        color: black!important;
        opacity: .54!important;
    }

    /* Inversion of calendar icon in the top left corner of month view */
    .gb_Wa.gb_Fe {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) contrast(105%)!important;
    }

    /* Icons color in the pop up view coming after left clicking the event in the month view */
    .Wbs5sd,
    .rF3YF.wmyjXb {
        color: #000!important;
    }

    /* Border color for events that overlap each other in the week view */
    .EfQccc.F262Ye.EiZ8Dd::after {
        border-color: #000000;
    }

    .EfQccc.Hrn1mc.EiZ8Dd::after {
        border: 1px solid #000;
    }

    /* Border color for selected events that overlap each other in the week view */
    .EfQccc.MmaWIb.KKjvXb.EiZ8Dd::after {
        border: 1px solid #000;
    }

    /* Inside color of unticked calendar check boxes in the month view */
    .uHMk6b.fsHoPb {
        border: 7px solid black!important;
    }

    /* "Choose custom color" menu */
    .g3VIld.GFhhge.Up8vH.hFEqNb.J9Nfi.iWO5td {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
        background: rgb(25, 25, 25)!important;
        color: white!important;
    }

    /* "Hex" word in "Choose custom color" menu */
    .XBkKC.WSvIUd {
        color: white;
    }

    /* "Cancel" button in "Choose custom color" menu */
    .IP9Hyd .O0WRkf:first-child {
        color: #ffffff;
    }

    /* "Calendar" text next to the top-left logo */
    .logo-plus-button-lockup-text {
        color: white;
    }

    .gb_je.gb_ee {
        color: #fff;
    }

    /* "Moon phases" inversion */
    .st-wc {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Time of the events we were invited to (in the week view) */
    .Jmftzc.gVNoLb.LKeQwe {
        color: rgb(0, 0, 0);
    }

    /* Comma color in the events we were invited to (in the week view) */
    .Jmftzc.EiZ8Dd {
        color: #000;
    }

    /* Fix of current event colors and text in month view */
    .g3dbUc .jKgTF,
    .QGRmIf,
    .lcPUt {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
        font-weight: bold!important;
        mix-blend-mode: darken;
    }

    /* Past events in the month view */
    .g3dbUc.UflSff {
        filter: invert(100%) hue-rotate(180deg) saturate(140%) contrast(105%) opacity(40%)!important;
    }

    /* Past events in the week view */
    .NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd.UflSff.jKgTF {
        filter: invert(100%) hue-rotate(180deg) saturate(140%) contrast(50%) brightness(140%) opacity(90%)!important;
    }

    /* Past events in the week view (reapplication of oppacity) */
    .NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd.UflSff {
        filter: opacity(80%)!important;
    }

    /* Events in the week view */
    .NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Inversion of event colors in the pop up view coming after right clicking the event in the month view */
    .a63c9c.ztKZ3d {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Inversion of event colors in the main event view */
    .a63c9c {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Event color in "4 days" view" */
    .NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd.jKgTF {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
        font-weight: bold!important;
    }

    /* Color of events in the "Schedule" view */
    .Oxm52e {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Event color in the view of adding a task */
    .kImhzd {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Event color in the settings menu */
    .hsrazb {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Text and color in the pop up view coming after left clicking the event in the month view */
    .Tnsqdc,
    .kw5sif {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Pen icon in the pop up view coming after left clicking the event in the month view */
    .kXIDId {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Color of calendar in the pop up menu of month view */
    .sIyjR {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Inversion of attachment frame */
    .fFW7wc-OEVmcd {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) contrast(105%)!important;
    }

    /* Inversion of attachment icon */
    .ghXZpb {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Inversion of the icons in the right hand menu */
    .DWWcKd-OomVLb-LgbsSe-Bz112c-haAclf {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(120%) contrast(105%)!important;
    }





    /* ==== FONT ==== */
    /* Weight increase of the font used in top left mini calendar */
    .W0m3G {
        font-weight: 500!important;
    }

    /* Font weight increase of the event titles (month view) */
    .g3dbUc {
        font-weight: 900!important;
        color: #000000 !important;
    }

    /* Change of the font color of the past events (month view) */
    .g3dbUc.UflSff {
        color: #404040 !important;
    }

    /* Change of the font color for some kind of events (month view) */
    .g3dbUc.smECzc {
        color: #666666 !important;
    }

    /* Darkify some of the help/support sections of the site */
    .ghp-dialog,
    .ghp-header,
    .ng-scope,
    .article-container,
    .article-content-container
    {
      background: rgb(25, 25, 25);
    }

    .ghp-iconTextComponent-label
    {
        color: white;
    }

    ghp-iconTextComponent:hover,
    .ghp-iconTextComponent:focus
    {
        background: #000;
    }

    /* Font color of past events (week view) */
    .FAxxKc {
        font-weight: 600!important;
        color: #000000 !important;
    }

    /* Font color of time and places of events (week view) */
    .A6wOnd,
    .VgueE,
    .Jmftzc.gVNoLb.EiZ8Dd,
    .Jmftzc.K9QN7e.EiZ8Dd.UflSff,
    .Jmftzc.K9QN7e.EiZ8Dd {
        color: #000000 !important;
    }

    /* Check mark color in the left side bar */
    .rq8Mwb {
        filter: invert(100%)!important;
    }

    /* Change of event text color in the pop-up window */
    .i5a7ie {
        color: #000!important;
    }

    /* Change of text color in the pop-up menu under the avatar icon */
    .gb_Eb {
        color: grey!important;
    }

    /* Font color in the pop up view coming after left clicking the event in the month view */
    #rAECCd,
    .jPtXgd {
        font-weight: 600!important;
    }
    .WpDZC,
    .zHQkBf {
        color: #c1c1c1!important;
    }

    /* Input text of event creation pop up menu */
    .whsOnd.zHQkBf {
        filter: invert(100%) hue-rotate(180deg) brightness(1.1) saturate(140%) contrast(105%)!important;
    }

    /* Text color in the pop-up menu*/
    .gb_Eb {
        color: black!important;
    }

    /* More readable "More" text */
    .gb_fa.gb_ng {
        font-weight: bolder!important;
    }

    /* Text in Apps menu */
    .gb_Z {
        font-weight: bolder!important;
    }

`);
