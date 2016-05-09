1. Intro/History
  - What the internet looked like per year.

2. HTML & selecting
  - Selection rules - element, class, ID, :nth-of-type, >, +, etc

3. Rules
  - Default rules for elements
  - Box model - width/height, padding, border, margin
  - Display - inline, inline-block, block
  - Floats - different behaviours
  - Units of measurement - em, rem, px, vh, vw
  - Colours

Hello! Welcome to CSS 101.

This evening I'm going to talk at you for about half an hour, then we're going to have a tiny break for tiny snacks, and then we're going to come back and do a little bit of a challenge. So for the first half you're not going to need your computers.

So this evening we're talking about CSS. Can anyone tell me what CSS stands for? (Hopefully someone says Cascading Style Sheets)

    Slide 1:
    Cascading
    Style
    Sheets

Has anyone here written any CSS before? Keep your hand up if you have ever tried to write some CSS and it hasn't done what you expected it to. Keep your hand up if you have ever tried to write some CSS and you thought it did what you expected it to, but then you looked at it in another browser or your phone and it looked weird.  

    Slide 2:
    Capricious
    Style
    Sheets

So rule 1 of CSS club is: CSS is weird. It's rendered differently in different browsers. To make something look how you want it to look, you often end up using a lot of hacks and workarounds. Editing one line of CSS may mean that something totally unrelated on some other part of your website stops working in an unexpected way. There are a lot of complicated invisible rules that determine how things get formatted, so you may end up spending a lot of time staring at your screen thinking: "but why is it doing that?"

So to get you all some background about *why* CSS is the way it is, I'm going to start with a little bit of a history lesson. And it starts in the year that I was born, 1989. Anyone else here born in 1989?

    Slide 3:
    1989
    (screenshot of 1989 web)

1989 is also the year the web was born - Tim Berners-Lee at CERN thought it up as an easier way to collaborate and link together academic articles and their references. There was already kind of an *internet* - the computers were already connected together - but this is when the *web* was born, as a way to make it easier to publish and browse linked information.

I'm going to go through a bunch more years, and the web site of that year, and I want you to give a shout out if it's the year you were born.

  Slide 4:
  1990
  (screenshot of 1990)

Who was born in 1990? This is the web of your year - Tim Berners-Lee's WorldWideWeb program, which displayed HTML pages. HTML was a new markup language based mostly off SGML, which was used mostly to mark up academic documents. I promise this is relevant!

  Slide 5:
  1991

Who was born in 1991? Here's the web of your year - the line mode browser on VAX.

  Slide 6:
  1992
  http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html

In 1992, two more browsers came on the scene: Viola and Erwise. At this point, the way that documents were formatted was dependent on the browser that you used. Erwise formatted everything with a light blue background and a black serif font, while Viola formatted everything with a light yellow background and allowed you to switch fonts.

  Slide 7:
  1993

People born in 1993, your website of the year is a webcam of a coffeepot in some students' common rooms.
In 1993, the new browser Mosaic came onto the scene, and CERN made a declaration that WWW technology would be freely available to anyone with no fees, and re-interpreted a clause prohibiting commercial use of the internet. Towards the end of this year, it started being written about by mainstream news publications. Up until this point, it was mostly just academics using the web, but from here on a number of other people started getting involved. In this year, websites like Bloomberg and IMDB started up - it was starting to become more mainstream, but there were still less than a thousand websites.
In this year Nat Torkington, who was an undergrad here at Vic just like some of you are, made some of New Zealand's first websites including a World Wide Web FAQ.

  Slide 8:
  1994

Your website of the year is an article about strawberry pop-tarts being set on fire.
Netscape Navigator 1.0 was released in this year, as was Internet Explorer 1.0, both descending from Mosaic.
So 1994 is the year when a lot of businesses started getting interested in having a Web presence, and designers started really getting involved. And they used every tool in their toolkit to make their websites look cool and fancy. But at this point there weren't a lot of tools in their toolkits - it was just HTML, images in some browsers, and things like Java applets. So in late 1994, Håkon Lie - also from CERN - made the first proposal for Cascading Style Sheets. He acknowledged that it was a problem that the authors of HTML documents had very little control over their presentation, and that the styles of websites were dependent on the platform they were viewed in, and proposed a system of stylesheets as a solution to these problems.
His 1994 proposal doesn't look that much like how CSS actually ended up, though.
Around the same time, the World Wide Web Consortium - the W3C - was founded. They still maintain Web technology specifications and standards, and they took an interest in CSS from the outset.

  Slide 9:
  1995

Your website of the year is http://www.purple.com/, which is just purple.
The web was getting significantly more popular at this point. More and more people were making web sites about all sorts of weird stuff. HTML was no longer just being used for formatting academic articles, and its shortcomings in allowing authors to control presentation were becoming very clear. Browsers started making their own non-standard tags such as <blink>, and people were using tables for layout rather than for tabular data.
In November the W3C ran a workshop about stylesheets. The stated goal of stylesheets were to avoid chaos on the web and ensure device independence.


    Slide 10:
    1996
    http://www.warnerbros.com/archive/spacejam/movie/jam.htm

Your website of the year is Space Jam! There is still no CSS in this website but there are a lot of frames, image maps, table layouts, and animated GIFs. You can see that even without CSS, people were figuring out ways to style websites only through HTML.
So in December 1996 the W3C made the first recommendation for CSS, and Internet Explorer 3 was the first browser that partially supported it. But growth of the web was happening way quicker than support for CSS.

    Slide 11:
    1997

In 1997, Internet Explorer 4 and Netscape 4 added more support for CSS, but it was still buggy. Most people on the web were using Internet Explorer or Netscape Navigator - the older browsers maintained by academics didn't make it into the new commercial environment of the web. The W3C started work on the CSS 2 spec, which expanded on the first edition, adding things like absolute and relative positioning.

    Slide 12:
    1998

Your website of the year is zombo.com. I'd just like to take a minute out to truly appreciate zombo.com:
[play zombocom]
So with the web getting more and more popular but support for CSS moving very slowly, people started using Flash to make their websites. It could be embedded in an HTML document, and if someone had Flash Player installed, regardless of what browser they were using or what kind of computer they were using, your website would look exactly as you wanted it to. This kind of fine-grained control over appearance made Flash a very appealing option for designers and companies that wanted shiny websites. However, it meant a step away from the accessibility and openness of the Web - screen readers and browsers without Flash installed couldn't see anything at all, and it was entirely controlled by a private company.
There was still no browser that fully supported the CSS 1.0 spec, let alone the 2.0 spec that was released in this year.

    Slide 13:
    1999

Your website of the year is GeoCities.com, which Yahoo acquired in 1999 for $3.57bn.
By now there were millions of websites, and hundreds of millions of people were using the internet. People could make their own websites using drag-and-drop editors like Microsoft FrontPage or Macromedia DreamWeaver, and many people made their own websites and hosted them on sites like GeoCities. There was still inconsistent support for CSS - Internet Explorer and Netscape Navigator, the main browsers at the time, had some support but it didn't overlap. Websites that used CSS features supported in one browser but not the other would frequently display badges like 'best viewed in Internet Explorer' or 'best viewed in Netscape Navigator'.

The W3C started working on CSS3 in 1999, but there was still no browser that fully supported CSS1.

    Slide 14:
    2000

Anyone here born in 2000? Anyone here who remembers using the internet in 2000?

So in 2000 Microsoft released Internet Explorer 5.0 for the Mac. It had mostly full support of CSS version 1 - actually the first mainstream browser release that could say that. Netscape was acquired by AOL and released Navigator 6, using a new rendering engine which they had open sourced called Gecko - but it wasn't really ready to be released, incredibly buggy, and it flopped.

    Slide 15:
    2001-2005

In 2001, Microsoft released Internet Explorer 6 for Windows. With these releases, Navigator's unreliable latest release, and with Microsoft's aggressive tactics for installing Internet Explorer, Navigator's user base was shrinking. Microsoft's version of web technologies wasn't compliant with the W3C's specifications, but it was increasingly the standard for how people experienced the web.
W3C was working on a revised version of the CSS specification which took into account how things had been implemented - 2.1 - but it wouldn't be issued as a recommendation until 2004.

The web was becoming more and more mainstream, and CSS 1.0 was more or less standard by now, but adoption of CSS 2 and 2.1 was poor. To demonstrate, here's AcidTest2, a test for compliance with CSS 2.1 standards. This is what it is meant to look like.. and this what it looks like in Internet Explorer 6.. and this is what it looks like in Netscape 5.

In 2003 Apple released its own web browser, Safari, using and contributing to the open source WebKit rendering engine.

In 2004 Mozilla released a new browser, Firefox, which would be using the Gecko rendering engine - an open source project originally developed for Netscape.  This is also the year that the CSS 2.1 specification was released as a recommendation.

So many people by this point had faster internet, more powerful computers, and a choice of browsers - but web developers were hamstrung by a huge percentage of the population still using Internet Explorer 6, which had a hugely outdated implementation of CSS (among other problems). Safari became the first browser to pass the Acid2 test of CSS 2.1 compliance in this year. Firefox would not pass until 2008, and Internet Explorer would more or less pass in 2009.

In 2005, Adobe acquired Flash for $3.4 billion dollars. Flash was becoming incredibly common on the web - in this year, YouTube started up, using Flash technologies for web video.

    Slide 20:
    2006-2010

2006 marked the release of Internet Explorer 7. Here is what AcidTest2 looks like in Internet Explorer 7.

In 2007, Apple released the first iPhone, notably without any support for Flash at all - according to an essay by Steve Jobs a few years later, the security and performance were just too terrible.
This wasn't the first mobile device that allowed web browsing, but it was the first that promised a full-featured web browsing experience, and it packed the CSS 2.1 compliant Safari browser.

In 2008, Google released its own browser based on the WebKit rendering engine, Chrome. It passed Acid2 from the get go. Firefox's Gecko engine was also brought to CSS 2.1 compliance in this year. A new AcidTest3 was released, which tested compliance with HTML5, JavaScript and the document object model - although no browsers had perfect performance, Chrome topped out the scores, with Safari and Firefox not too far behind, and Internet Explorer lagging a long way behind. The scores were basically inverse of their market share - Internet Explorer represented about 70% of internet traffic, Firefox about 25%, Chrome and Safari making up the rest.

Internet Explorer 8 was released, and finally passed AcidTest2!
Here is its score on AcidTest3.

Internet Explorer finally dropped below 50% usage in 2010. Google released its first flagship phone: Nexus One, packaged with Android Eclair.

    Slide 25:
    2011-2016

2011 is the last year I used Internet Explorer 6, which was released ten years previously. It's the year that Internet Explorer 9 was released, but because it wasn't tied in to the upgrade cycle of Windows, Internet Explorer 7 and 8 were still much more commonly used - particularly in large organisations. It did pass AcidTest3, however.

Internet Explorer 10 was released with Windows 8, with reasonably good CSS3 support. Even with the new release, though, Google Chrome started overtaking Internet Explorer in popularity in 2012. The majority of people were actually using CSS 2.1 compliant browsers, and it started being worth using CSS3 features. With Chrome and Safari both using the WebKit rendering engine, and Internet Explorer steadily declining, standardisation appeared within reach. Chrome and Firefox were both using an evergreen upgrade cycle, releasing updates often and pushing them to users on restart.

So we're up to the last few years now, and I hope all of you have been born and used the internet by this point. Even though CSS3 started being developed in 1998, it's only really in the last few years that it's been worth using - and even then, the decline of people using Internet Explorer 8 and below has been slow as large organisations upgrade their systems.

So the less that we need to support Internet Explorer 6-8, the CSS we write needs less and less hacks to get around weird implementation decisions from 2001.

Last year, Internet Explorer was deprecated altogether with Microsoft releasing Edge - an evergreen browser with a new fork of the Microsoft rendering engine. It is more or less fine. And Youtube dropped Flash, as did a lot of other sites following significant security concerns.

So here we are. CSS has been around for a long time, but it's only recently that it has really matured in its implementation. So it's a perfect time to learn!

    Slide 26:
    So what even is this newfangled CSS thing?

So basically CSS selects elements in an HTML document and declares how it should look.


Which elements to change are stated in a selector. The changes is stated in a declaration. 

Talk about family

Selectors

Declarations




What takes priority in CSS is governed by a principle known as specificity. That's basically just a fancy way of saying 'specificness'. Well, it's the correct way of saying 'specificness'. 'Specificness' is not a word.
So the lowest priority rule here is that a rule lower down in a document wins any conflicts, all other things being equal. So if you  





x










x
