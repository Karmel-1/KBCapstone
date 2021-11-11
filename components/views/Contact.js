export default () => `
<form
  action="https://formspree.io/f/mgerqqlj"
  method="POST"
  id="formc"
>
  <label>
    Your contact email for your band or venue:
    <input type="email" name="_replyto">
  </label>

<br/>

<label>
What do yo want people to know about your band or venue: <br/>
<br/>
    <textarea name="message" id="msg"></textarea>
  </label>
  <br/>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>

`;
