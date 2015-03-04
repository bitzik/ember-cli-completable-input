##Styling the completable-input component: 

This addon generates the following HTML (without all the ember-injected part in it)

    <div class="completable-input">
      <input class="completable-input-entry {the class(es) you've bound to input-class}" 
             placeholder={what ever you passed on as placeholder} 
             type="text">
      <div class="completion-list {hide|show}">
          <div class="completion-candidate {active <- will be set if this is the completion that has been selected via up/down arrows}">
            A possible completion
          </div>
          ...
          ...
          ...
      </div>
    </div>

Now you know which classes to target in your CSS to make it look differently.

