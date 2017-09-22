Summary:

	The Qlik Sense Container Object is an object that allows a Qlik Sense developer to embed multiple objects in a single space. The object to display is then selected either by the user using a simple tab strip control, or automatically by extension if only one objects show/hide condition evaluates to true. The purpose of the second options it to allow for two different objects to occupy the same space, and for the developer to choose when either object is visible. Allowing for the developer of a more guided analytics feel.
	
Settings:

	Container Settings
	 - Server URL: Can be used to specify another Qlik Sense server other than the server which is hosting the QVF containing the extension itself. If blank the localhost is used automatically.
	 - QVF: Can be used to specify another Qlik Sense document (QVF) as the source of the objects in the container. Allowing the developer to embed visualizations from other files. NOTE: The selections and data between the host app containing the container object extension and the target app containing the objects to display are not linked in any way. If this is a capability you need please contact sales@aculytics.net and ask about our other internally developed extension objects and development/consulting services.
	  - Container BG Color: Can be set to either the Default Button BG Color or the current color of the currently selected object. Choosing the second option may cause the container BG color to change when the user selects/navigates to different tabs based on each tabs individual BG color setting.
	  - Button Location: Top, Bottom, Left, and Right
	  - Button Width: The desired button width or the tab strip buttons, if blank the button width will adjust automatically based on the text within the buttons/tabs themselves.
	  - Button BG Color: The default back-ground color for all buttons/tabs within the container.
	  - Button Txt Color: The default font-color for all of the buttons/tabs within the container.
	 
	 Container Object [1-10]
	  - Object [#] Label: The text label displayed on the button/tab when visible.
	  - Object [#] ID: The object ID of the app object to be displayed. NOTE: If a URL is provided starting with "HTTP://" or "HTTPS://" (NOTE: this feature is case sensitive) a web page can be placed inside the container tab instead of a Qlik Sense app object.
	  - Object [#] Show Condition: An evaluated condition that controls the visability of the Object button/tab as well as the object itself. NOTE: If only one object is visible at any given time, the container will automatically display that object and hide the tab strip.
	  - Object [#] Bg Color: The background color of this tab/button as well as the border around the container when the object has the focus.
	  - Object [#] Txt Color: The font color of the tab/button. NOTE: Both the background and font colors accept expressions, so their colors can be calculated dynamically to create alerts conditions such as highlighting a tab red when you want to drawl attention to its contents.
	  - Object [#] Tool Tip: Text to be displayed when the user hovers the mouse of the tab/button.
	  - Message [#] Current Selections: When the container itself and the object are within the same QVF on the same server, do you want the app object to inherit the Current Selection state from the application?
	  - Message [#] No Interactions: Check this box if you do not want the user to be able to make selections or interact with the object inside the container.
	  - Message [#] No Animations: Increase performance by disabling unnecessary chart animations.
	  - Message [#] Clear All: Clear all selections when this tab/button is clicked and the object displayed.
	  - Message [#] Bookmark ID: The bookmark ID you would like to be applied when this tab/button is clicked and the object displayed.
	  
Author:

	Andrew Pettit
	andrew@aculytics.net
	Aculytics, Inc.
	http://aculytics.net