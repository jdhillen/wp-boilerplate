<?php
  /* Template Name: Style Guide */
?>

<?php /* Template Name: Style Guide */ ?>

<?php get_header(); ?>

<main role="main" aria-label="Content">

    <section class="row">
		<h1><?php the_title(); ?></h1>
        <p class="lead">This page is filled with common HTML elements to be used to provide visual feedback whilst building CSS systems and frameworks.</p>
        <hr/>
    </section>


    <section id="text-paragraphs">
      <h2 class="docs-heading" data-magellan-target="text-paragraphs"><a href="#text-paragraphs"></a>Paragraphs</h2>
      <p>A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
    </section>

    <hr>

    <section id="text-heading">
      <h2 class="docs-heading" data-magellan-target="text-heading"><a href="#text-heading"></a>Headings</h2>
      <h1>h1. This is a very large header.</h1>
      <h2>h2. This is a large header.</h2>
      <h3>h3. This is a medium header.</h3>
      <h4>h4. This is a moderate header.</h4>
      <h5>h5. This is a small header.</h5>
      <h6>h6. This is a tiny header.</h6>
      <h1>
        <small>h1. This is a very large header segment.</small>
      </h1>
      <h2>
        <small>h2. This is a large header segment.</small>
      </h2>
      <h3>
        <small>h3. This is a medium header segment.</small>
      </h3>
      <h4>
        <small>h4. This is a moderate header segment.</small>
      </h4>
      <h5>
        <small>h5. This is a small header segment.</small>
      </h5>
      <h6>
        <small>h6. This is a tiny header segment.</small>
      </h6>
    </section>

    <hr>

    <section id="text-blockquotes">
      <h2 class="docs-heading" data-magellan-target="text-blockquotes"><a href="#text-blockquotes"></a>Blockquotes</h2>
      <blockquote>
        <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text.</p>
        <p>It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom.</p>
        <cite>
          <a href="#">Said no one, ever</a>
        </cite>
      </blockquote>
    </section>

    <hr>

    <section id="text-lists">
      <h2 class="docs-heading" data-magellan-target="text-lists"><a href="#text-lists"></a>Lists</h2>
      <div>
        <h4>Definition list</h4>
        <dl>
          <dt>Definition List Title</dt>
          <dd>This is a definition list division.</dd>
        </dl>
      </div>
      <div>
        <h4>Ordered List</h4>
        <ol>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ol>
      </div>
      <div>
        <h4>Unordered List</h4>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
      </div>
    </section>

    <hr>

    <section id="text-hr">
      <h2 class="docs-heading" data-magellan-target="text-hr"><a href="#text-hr"></a>Horizontal Rules</h2>
      <hr>
      <hr class="dotted"/>
      <hr class="dashed"/>
    </section>

    <hr>

    <section id="text-tables">
      <h2 class="docs-heading" data-magellan-target="text-tables"><a href="#text-tables"></a>Tabular Data</h2>
      <table>
        <thead>
          <tr>
            <th width="200">Table Header</th>
            <th>Table Header</th>
            <th width="150">Table Header</th>
            <th width="150">Table Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content Goes Here</td>
            <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
          </tr>
          <tr>
            <td>Content Goes Here</td>
            <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
          </tr>
          <tr>
            <td>Content Goes Here</td>
            <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
          </tr>
        </tbody>
      </table>
    </section>

    <hr>

    <section id="text-code">
      <h2 class="docs-heading" data-magellan-target="text-code"><a href="#text-code"></a>Code</h2>
      <div>
        <p>
          <strong>Keyboard input:</strong>
          <kbd>Cmd</kbd>
        </p>
        <p>
          <strong>Inline code:</strong>
          <code>&lt;div&gt;code&lt;/div&gt;</code>
        </p>
        <p>
          <strong>Sample output:</strong>
          <samp>This is sample output from a computer program.</samp>
        </p>

        <h4>Pre-formatted text</h4>
        <pre>
          P R E F O R M A T T E D T E X T
          ! " # $ % &amp; ' ( ) * + , - . /
          0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
          @ A B C D E F G H I J K L M N O
          P Q R S T U V W X Y Z [ \ ] ^ _
          ` a b c d e f g h i j k l m n o
          p q r s t u v w x y z { | } ~
        </pre>
      </div>
    </section>

    <hr>

    <section id="text-inline">
      <h2 class="docs-heading" data-magellan-target="text-inline"><a href="#text-inline"></a>Inline Elements</h2>
      <div>
        <p><a href="#!">This is a text link</a>.</p>

        <p><strong>Strong is used to indicate strong importance.</strong></p>

        <p><em>This text has added emphasis.</em></p>

        <p>The <b>b element</b> is stylistically different text from normal text, without any special importance.</p>

        <p>The <i>i element</i> is text that is offset from the normal text.</p>

        <p>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation.</p>

        <p><del>This text is deleted</del> and <ins>This text is inserted</ins>.</p>

        <p><s>This text has a strikethrough</s>.</p>

        <p>Superscript<sup>&reg;</sup>.</p>

        <p>Subscript for things like H<sub>2</sub>O.</p>

        <p><small>This small text is small for for fine print, etc.</small></p>

        <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>

        <p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation.</q></p>

        <p><cite>This is a citation.</cite></p>

        <p>The <dfn>dfn element</dfn> indicates a definition.</p>

        <p>The <mark>mark element</mark> indicates a highlight.</p>

        <p>The <var>variable element</var>, such as <var>x</var> = <var>y</var>.</p>

        <p>The time element: <time datetime="2013-04-06T12:32+00:00">2 weeks ago</time></p>
      </div>
    </section>

    <hr>

    <section id="embedded-images">
      <h2 class="docs-heading" data-magellan-target="embedded-images"><a href="#embedded-images"></a>Images</h2>
      <div>
        <h6>No <code>&lt;figure&gt;</code> element</h6>
        <img src="http://placehold.it/350x350" alt="Image alt text">
      </div>
      <div>
        <h6>Wrapped in a <code>&lt;figure&gt;</code> element, no <code>&lt;figcaption&gt;</code></h6>
        <figure>
          <img src="http://placehold.it/350x350" alt="Image alt text">
        </figure>
      </div>
      <div>
        <h6>Wrapped in a <code>&lt;figure&gt;</code> element, with a <code>&lt;figcaption&gt;</code></h6>
        <figure>
          <img src="http://placehold.it/350x350" alt="Image alt text">
          <figcaption>Here is a caption for this image.</figcaption>
        </figure>
      </div>
    </section>

    <hr>

    <section id="embedded-audio">
      <h2 class="docs-heading" data-magellan-target="embedded-audio"><a href="#embedded-audio"></a>Audio</h2>
      <div>
        <audio controls="">
          <source src="https://p4.bcbits.com/download/track/a369abd6636fa2831cabab8a18d54ee6/mp3-128/2592979997?fsig=d16d43050aac5035344c86df360f3909&id=2592979997&stream=1&ts=1494374400.0&token=1494374460_508567aa0e1dec53b99f74403095dd449da20e9c" type="audio/mp3">
        </audio>
      </div>
    </section>

    <hr>

    <section id="embedded-video">
      <h2 class="docs-heading" data-magellan-target="embedded-video"><a href="#embedded-video"></a>Video</h2>
      <div>
        <video controls="">
          <source src="http://html5demos.com/assets/dizzy.mp4" type="video/mp4">
          <source src="http://html5demos.com/assets/dizzy.webm" type="video/webm">
          <source src="http://html5demos.com/assets/dizzy.ogv" type="video/ogg">
        </video>
      </div>
    </section>

    <hr>

    <section id="embedded-canvas">
      <h2 class="docs-heading" data-magellan-target="embedded-canvas"><a href="#embedded-canvas"></a>Canvas</h2>
      <div>
        <canvas id="myCanvas" width="300" height="250" style="background-color: #333333;">
          <p>Your browser does not support canvas.</p>
        </canvas>
      </div>
    </section>

    <hr>

    <section id="embedded-meter">
      <h2 class="docs-heading" data-magellan-target="embedded-meter"><a href="#embedded-meter"></a>Meter</h2>
      <div>
        <meter value="2" min="0" max="10">2 out of 10</meter>
      </div>
    </section>

    <hr>

    <section id="embedded-progress">
      <h2 class="docs-heading" data-magellan-target="embedded-progress"><a href="#embedded-progress"></a>Progress</h2>
      <div>
        <progress value="22" max="100"></progress>
      </div>
    </section>

    <hr>

    <section id="embedded-svg">
      <h2 class="docs-heading" data-magellan-target="embedded-svg"><a href="#embedded-svg"></a>SVG</h2>
      <div>
        <svg width="100px" height="100px">
          <circle cx="100" cy="100" r="100" fill="#1fa3ec"></circle>
        </svg>
      </div>
    </section>

    <hr>

    <section id="embedded-iframe">
      <h2 class="docs-heading" data-magellan-target="embedded-iframe"><a href="#embedded-iframe"></a>iFrame</h2>
      <div>
        <iframe src="http://www.w3schools.com">
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </section>

    <hr>

    <section id="form-input">
      <h2 class="docs-heading" data-magellan-target="form-input"><a href="#form-input"></a>Input Fields</h2>
      <form>
        <fieldset>
          <legend>Input Field Legend</legend>

          <label for="input-text">Text Input</label>
          <input id="input-text" type="text" placeholder="Text Input">

          <label for="input-password">Password</label>
          <input id="input-password" type="password" placeholder="Type your Password">

          <label for="input-webaddress">Web Address</label>
          <input id="input-webaddress" type="url" placeholder="http://yoursite.com">

          <label for="input-emailaddress">Email Address</label>
          <input id="input-emailaddress" type="email" placeholder="name@email.com">

          <label for="input-phone">Phone Number</label>
          <input id="input-phone" type="tel" placeholder="(999) 999-9999">

          <label for="input-search">Search</label>
          <input id="input-search" type="search" placeholder="Enter Search Term">

          <label for="input-text2">Number Input</label>
          <input id="input-text2" type="number" placeholder="Enter a Number">

          <label for="input-text3" class="error">Error</label>
          <input id="input-text3" class="is-error" type="text" placeholder="Text Input">

          <label for="input-text4" class="valid">Valid</label>
          <input id="input-text4" class="is-valid" type="text" placeholder="Text Input">
        </fieldset>
      </form>
    </section>

    <hr>

    <section id="form-select">
      <h2 class="docs-heading" data-magellan-target="form-select"><a href="#form-select"></a>Select Menus</h2>
      <form>
        <fieldset>
          <legend>Select Menu Legend</legend>

          <label for="select">Select</label>
          <select id="select">
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
        </fieldset>
      </form>
    </section>

    <hr>

    <section id="form-checkbox">
      <h2 class="docs-heading" data-magellan-target="form-checkbox"><a href="#form-checkbox"></a>Checkboxes</h2>
      <form>
        <fieldset>
          <legend>Checkbox Legend</legend>

          <label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked"> Choice A</label>
          <label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"> Choice B</label>
          <label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"> Choice C</label>
        </fieldset>
      </form>
    </section>

    <hr>

    <section id="form-radio">
      <h2 class="docs-heading" data-magellan-target="form-radio"><a href="#form-radio"></a>Radio Buttons</h2>
      <form>
        <fieldset>
          <legend>Radio Button Legend</legend>

          <label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked="checked"> Option 1</label>
          <label for="radio2"><input id="radio2" name="radio" type="radio" class="radio"> Option 2</label>
          <label for="radio3"><input id="radio3" name="radio" type="radio" class="radio"> Option 3</label>
        </fieldset>
      </form>
    </section>

    <hr>

    <section id="form-textareas">
      <h2 class="docs-heading" data-magellan-target="form-textareas"><a href="#form-textareas"></a>Textareas</h2>
      <form>
        <fieldset>
          <legend>Textarea Legend</legend>

          <label for="textarea">This is the Textarea Label</label>
          <textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here"></textarea>
        </fieldset>
      </form>
    </section>

    <hr>

    <section id="form-html5inputs">
      <h2 class="docs-heading" data-magellan-target="form-html5inputs"><a href="#form-html5inputs"></a>HTML5 Inputs</h2>
      <form>
        <fieldset>
          <legend>HTML5 Input Legend</legend>

          <label for="ic">Color input</label>
          <input type="color" id="ic" value="#000000">

          <label for="in">Number input</label>
          <input type="number" id="in" min="0" max="10" value="5">

          <label for="ir">Range input</label>
          <input type="range" id="ir" value="10">

          <label for="idd">Date input</label>
          <input type="date" id="idd" value="1970-01-01">

          <label for="idm">Month input</label>
          <input type="month" id="idm" value="1970-01">

          <label for="idw">Week input</label>
          <input type="week" id="idw" value="1970-W01">

          <label for="idt">Datetime input</label>
          <input type="datetime" id="idt" value="1970-01-01T00:00:00Z">

          <label for="idtl">Datetime-local input</label>
          <input type="datetime-local" id="idtl" value="1970-01-01T00:00">
        </fieldset>
      </form>
    </section>

    <hr>

    <section id="form-action">
      <h2 class="docs-heading" data-magellan-target="form-action"><a href="#form-action"></a>Action Buttons</h2>
      <form>
        <fieldset>
          <legend>Action Button Legend</legend>
          <input class="button" type="submit" value="Input">
          <button class="button" type="submit">Button</button>
          <input class="button" type="reset" value="Reset">
          <input class="button disabled" type="submit" value="Disabled" >
        </fieldset>
      </form>
    </section>

</main><!-- Close page -->

<?php get_footer();
