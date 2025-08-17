import { render, screen } from '@testing-library/react'
import Navigation from '@/components/Navigation'

describe("Navigation component", () => {

    const NavLinkArray = [
        { name: "Home", link: "/" },
        { name: "Reading List", link: "/reading-list" }
    ]

    test("renders navigation links with correct text", () => {
        render(<Navigation />)

        NavLinkArray.forEach((item) => {
            const navLink = screen.getByRole("link", { name: item.name })
            expect(navLink).toHaveTextContent(item.name)
        })
    })

    test("renders navigation links with correct href", () => {
        render(<Navigation />)

        NavLinkArray.forEach((item) => {
            const navLink = screen.getByRole("link", { name: item.name })
            expect(navLink).toHaveAttribute("href", item.link)
        })
    })
})
