
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { experience } from "@/lib/constants";

export function ExperienceSection() {
    return (
        <section id="experience" className="py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    {experience.map((job, index) => (
                        <Card
                            key={index}
                            className="transition-all hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02] hover:border-primary/20 animate-in slide-in-from-bottom-5 duration-700"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle>{job.title}</CardTitle>
                                        <CardDescription className="text-base font-medium text-primary">{job.company}</CardDescription>
                                    </div>
                                    <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                                        {job.period}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{job.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
};