# Bootstrap classes (Documentation)
## Navbar
navbar: This is the base class for creating a navigation bar in Bootstrap. It sets up the basic styling and structure for the navbar.

navbar-expand-lg: This class specifies how the navbar behaves when the screen size changes. In this case, it indicates that the navbar should expand (show the navigation links) when the screen width is equal to or greater than the "lg" (large) breakpoint.

navbar-dark: This class sets the color scheme for the navbar. It makes the background dark, and the text color is light. You can use navbar-light for a light background with dark text.

maincolor: This is a custom class that you've applied. It's not a standard Bootstrap class, so its appearance depends on how it's defined in your custom CSS or elsewhere in your project.

py-3: This class is used to add padding to the top and bottom of the navbar. py-3 adds padding on the y-axis (top and bottom) with a value of 3. It's part of Bootstrap's spacing utility classes.

navbar-brand :  It typically represents the name or logo of a website or application and is often placed in the top-left corner of the navbar. The navbar-brand class helps with consistent styling and spacing for this branding element.

navbar-toggler : , it assigns the "navbar-toggler" class to the element, which is often used with Bootstrap to create a responsive navigation menu toggle button.

data-bs-toggle: This is a custom data attribute often used in Bootstrap for specifying behavior. In this case, it indicates that this button should trigger the collapse behavior, typically used for collapsing or expanding a navigation menu on smaller screens. When this button is clicked, it toggles the visibility of the collapsible content (e.g., navigation links).

data-bs-target: Another Bootstrap-specific data attribute. It specifies the target element that the "collapse" behavior should apply to. In this case, it targets an element with the ID "navbarNavDropdown," which is typically the navigation menu that will collapse or expand.

The class navbar-toggler-icon is a predefined Bootstrap class specifically used for styling the toggle icon in a responsive navigation menu (often referred to as the "hamburger" icon). This icon is usually displayed on smaller screens to allow users to expand or collapse the navigation menu. The class ensures that the icon is appropriately styled to match the design and functionality of Bootstrap's navigation menus.

className='navbar-nav' applies the Bootstrap class navbar-nav to style this unordered list as part of the navigation menu.

className='ms-auto' is a Bootstrap utility class. In this context, it means "margin start auto," and it's used to push the content to the right. So, any content within this ul will be right-aligned within the navigation menu.

className='m-1' is a Bootstrap utility class. It adds a margin of 1rem to the list item, creating space around it.

## container-fluid

When you view this example in a web browser, you'll see that the first div with container-fluid expands to the full width of the screen, while the second div with the standard container class is centered with fixed width, as per Bootstrap's default behavior. This demonstrates the difference between container-fluid   and the regular container. 

## ARIA

aria-controls: This is an attribute that is used for accessibility (ARIA, or Accessible Rich Internet Applications) in web applications. It provides a relationship between the button and the element it controls. In this case, it specifies that the button controls the element with the ID "navbarNavDropdown."

aria-expanded: Another ARIA attribute used to convey the current state of an element that can be expanded or collapsed. It indicates whether the collapsible content is expanded or not. Here, it's initially set to "false," meaning the content is not expanded.

aria-label: This ARIA attribute provides a label or description for the button that is read by screen readers. It helps make the button's purpose clear to users who rely on assistive technologies.