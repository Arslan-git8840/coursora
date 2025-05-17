export function formatMiddlewareText(raw) {
    // Make words between ** bold and add a newline before
    let textWithBoldAndNewlines = raw.replace(/\*\*(.*?)\*\*/g, '<br /><strong className="font-bold capitalize"><li className="list-disc capitalize">$1</li></strong>');

    // Remove other formatting characters
    let textWithoutFormatting = textWithBoldAndNewlines.replace(/\*+|\`+|\:+/g, '');

    // Split the text into words
    const words = textWithoutFormatting.split(/\s+/).filter(word => word.length > 0);

    return words.join(' ');
}

const raw = "before it reaches your page or API route. It can also construct a response directly, effectively short-circuiting the normal request flow. * **`NextResponse` and `NextRequest`:** Middleware uses the `NextResponse` and `NextRequest` objects. `NextRequest` provides information about the incoming request. `NextResponse` allows you to create or modify the response. You can use `NextResponse.next()` to continue processing the request down the chain of middleware or to the target route handler. * **`rewrite` vs. `redirect`:** Middleware can `rewrite` a request (modify the URL internally without changing what the user sees) or `redirect` a user to a different URL. Rewrites are useful for things like A/B testing or internationalization, while redirects are used for more permanent changes in URL structure or user redirection. **Configuration:** The `matcher` configuration is defined in the `middleware.ts` or `middleware.js` file. It's an array of regular expressions or paths that specify when the middleware should be executed. You can use path-to-regexp syntax for more complex matching patterns. **Common Use Cases:** * **Authentication:** Checking if a user is authenticated before allowing access to protected routes Understanding and utilizing Next.js middleware is crucial for building robust and scalable Next.js applications. It empowers you to control the request lifecycle and implement sophisticated logic that enhances the user experience and application security.";

const formattedText = formatMiddlewareText(raw);
console.log(formattedText);