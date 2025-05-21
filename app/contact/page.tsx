"use client";

import GeometricFlow from "@/components/geometric-flow";
import { Navigation } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_olm9nhs", // Replace with your EmailJS service ID
        "template_sbnrjai", // Replace with your EmailJS template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
          to_email: "leulsolm7@gmail.com",
        },
        "JEgZQt5lcjVH27sTL" // Replace with your EmailJS public key
      );

      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold">LEUL SOLOMON/</h1>
              <span className="text-xl text-purple-600">SOFTWARE ENGINEER</span>
            </div>
            <Navigation />
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      className="min-h-[150px]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-purple-900 hover:bg-purple-800"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="container mx-auto px-4 py-6 mt-12 border-t">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 by Leul Solomon.</p>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">CALL</span>
                <Link
                  href="tel:+251932599064"
                  className="text-sm text-purple-600"
                >
                  +251932599064
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">E-MAIL</span>
                <Link
                  href="mailto:leulsolm7@gmail.com"
                  className="text-sm text-purple-600"
                >
                  leulsolm7@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="absolute inset-0 z-0">
        <GeometricFlow />
      </div>
    </div>
  );
}
