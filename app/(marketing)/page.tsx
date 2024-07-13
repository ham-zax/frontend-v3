'use client'
import {
  Button,
  Card,
  Center,
  useColorMode,
  Divider,
  IconButton,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  VStack,
  Flex,
  Box,
  Image,
  Circle,
  SimpleGrid,
} from '@chakra-ui/react'
import Section from '@/lib/shared/components/layout/Section'
import FadeInOnView from '@/lib/shared/components/containers/FadeInOnView'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { ProtocolStatsSection } from '@/lib/modules/msrketing/ProtocolStatsSection'
import { CloseIcon } from '@chakra-ui/icons'
import { ArrowUpRight } from 'react-feather'
import { ParallaxImage } from '@/lib/shared/components/marketing/ParallaxImage'
import { HomeCaseStudies } from '@/lib/shared/components/marketing/HomeCaseStudies'
import { Picture } from '@/lib/shared/components/other/Picture'

export default function Home() {
  const { colorMode } = useColorMode()

  return (
    <Box className="homepage">
      <Box className="hero">
        <Flex direction="column" justify="center" className="hero-container">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'null', md: 'center' }}
            height="100%"
          >
            <Flex
              direction="column"
              w="full"
              height="100%"
              justifyContent="center"
              alignItems={{ base: 'start', md: 'center' }}
              px={['ms', 'md']}
              py={['lg', 'lg']}
              bg="background.level2"
            >
              <FadeInOnView>
                <Box py={{ base: 'xl', md: '2xl' }}>
                  <Box h="24px">
                    <Text pb="lg" variant="eyebrow">
                      Balancer Protocol
                    </Text>
                  </Box>
                  <Heading
                    position="relative"
                    pb="lg"
                    fontWeight="normal"
                    left={{ base: '-5px', md: '-16px' }}
                    letterSpacing="-5px"
                    sx={{
                      fontSize: 'clamp(100px, 18vw, 200px)',
                    }}
                  >
                    Earn
                  </Heading>
                  <Text pb="sm">Passive yield-bearing pools for Liquidity Providers</Text>
                  <Box>
                    <Text variant="secondary" pb="lg">
                      Join <span>227,456</span> Liquidity Providers
                    </Text>
                    <Button size="lg" as={NextLink} href="/pools" prefetch={true} variant="primary">
                      Explore pools
                    </Button>
                  </Box>
                </Box>
              </FadeInOnView>
            </Flex>

            <Flex
              direction="column"
              bg="background.level3"
              w="full"
              px={['ms', 'md']}
              py={['lg', 'lg']}
              height="100%"
              justifyContent="center"
              alignItems={{ base: 'start', md: 'center' }}
            >
              <FadeInOnView>
                <Box py={{ base: 'xl', md: '2xl' }}>
                  <Box h="24px">
                    <Link href="/build/v3">
                      <Flex>
                        <Text background="font.special" backgroundClip="text" variant="eyebrow">
                          Balancer v3 is coming&nbsp;
                        </Text>
                        <Text variant="eyebrow" display="none" opacity="0" visibility="hidden">
                          Learn more
                        </Text>
                      </Flex>
                    </Link>
                  </Box>

                  <Heading
                    position="relative"
                    left={{ base: '-5px', md: '-16px' }}
                    pb="lg"
                    fontWeight="normal"
                    letterSpacing="-5px"
                    sx={{
                      fontSize: 'clamp(100px, 18vw, 200px)',
                    }}
                  >
                    Build
                  </Heading>
                  <Text pb="sm">The trusted toolkit for true AMM experimentation</Text>
                  <Box>
                    <Text variant="secondary" pb="lg">
                      Join <span>100+</span> protocol builders
                    </Text>
                    <button
                      className="btn-popover"
                      popovertarget="disclose"
                      popovertargetaction="toggle"
                    >
                      Start building
                    </button>
                    <div popover="auto" id="disclose" className="disclosure">
                      <FadeInOnView>
                        <Box>
                          <header>
                            <Flex
                              position="relative"
                              justifyContent="space-between"
                              background="background.button.secondary"
                              px="md"
                              alignItems="center"
                              height="48px"
                            >
                              <Text
                                fontWeight="bold"
                                fontSize="lg"
                                m="0"
                                p="0"
                                overflow="hidden"
                                whiteSpace="nowrap"
                                color="font.dark"
                              >
                                Start building
                              </Text>

                              {/* <Button popovertarget="disclose" popovertargetaction="close">
                              <Box position="relative" top="-4px" right="-4px">
                                <IconButton size="xs" icon={<CloseIcon />} />
                              </Box>
                            </Button> */}
                            </Flex>
                          </header>
                          <Box className="content">
                            <div className="actions">
                              <VStack alignItems="flex-start" gap="0">
                                <Box role="group" px="md" py="sm" w="full" display="block">
                                  <Link
                                    as={NextLink}
                                    href="/build/v3"
                                    prefetch={true}
                                    _groupHover={{
                                      textDecoration: 'none',
                                    }}
                                  >
                                    <Text
                                      fontWeight="bold"
                                      whiteSpace="nowrap"
                                      overflow="hidden"
                                      transition="all 0.2s ease-out 0.1s"
                                      _groupHover={{
                                        color: 'font.maxContrast',
                                      }}
                                    >
                                      Balancer v3
                                    </Text>
                                    <Text
                                      fontSize="sm"
                                      variant="secondary"
                                      whiteSpace="nowrap"
                                      overflow="hidden"
                                      transition="all 0.2s ease-out 0.1s"
                                      _groupHover={{ color: 'font.maxContrast' }}
                                    >
                                      Learn about the key benefits
                                    </Text>
                                  </Link>
                                </Box>

                                <Box role="group" px="md" py="sm" w="full" display="block">
                                  <Link
                                    href="https://docs-v3.balancer.fi/"
                                    _groupHover={{
                                      textDecoration: 'none',
                                    }}
                                  >
                                    <Flex alignItems="center" gap="xxs">
                                      <Text
                                        fontWeight="bold"
                                        whiteSpace="nowrap"
                                        overflow="hidden"
                                        transition="all 0.2s ease-out 0.1s"
                                        _groupHover={{ color: 'font.maxContrast' }}
                                      >
                                        v3 Docs
                                      </Text>
                                      <ArrowUpRight display="inline" size={12} />
                                    </Flex>
                                    <Text
                                      fontSize="sm"
                                      variant="secondary"
                                      whiteSpace="nowrap"
                                      overflow="hidden"
                                      transition="all 0.2s ease-out 0.1s"
                                      _groupHover={{ color: 'font.maxContrast' }}
                                    >
                                      Go deep down the rabbithole
                                    </Text>
                                  </Link>
                                </Box>
                                <Box role="group" px="md" py="sm" w="full" display="block">
                                  <Link
                                    href="https://github.com/balancer/scaffold-balancer-v3"
                                    _groupHover={{
                                      textDecoration: 'none',
                                    }}
                                  >
                                    <Flex alignItems="center" gap="xxs">
                                      <Text
                                        fontWeight="bold"
                                        whiteSpace="nowrap"
                                        overflow="hidden"
                                        transition="all 0.2s ease-out 0.1s"
                                        _groupHover={{ color: 'font.maxContrast' }}
                                      >
                                        Scaffold Balancer v3
                                      </Text>
                                      <ArrowUpRight display="inline" size={12} />
                                    </Flex>
                                    <Text
                                      fontSize="sm"
                                      variant="secondary"
                                      whiteSpace="nowrap"
                                      overflow="hidden"
                                      transition="all 0.2s ease-out 0.1s"
                                      _groupHover={{ color: 'font.maxContrast' }}
                                    >
                                      Prototyping tool for Balancer v3
                                    </Text>
                                  </Link>
                                </Box>
                                <Box role="group" px="md" py="sm" w="full" display="block">
                                  <Link
                                    href="https://docs.balancer.fi/"
                                    _groupHover={{
                                      textDecoration: 'none',
                                    }}
                                  >
                                    <Flex alignItems="center" gap="xxs">
                                      <Text
                                        fontWeight="bold"
                                        transition="all 0.2s ease-out 0.1s"
                                        _groupHover={{ color: 'font.maxContrast' }}
                                      >
                                        v2 Docs
                                      </Text>
                                      <ArrowUpRight display="inline" size={12} />
                                    </Flex>

                                    <Text
                                      fontSize="sm"
                                      variant="secondary"
                                      transition="all 0.2s ease-out 0.1s"
                                      _groupHover={{ color: 'font.maxContrast' }}
                                      whiteSpace="nowrap"
                                      overflow="hidden"
                                    >
                                      Build on battle-tested smart contracts
                                    </Text>
                                  </Link>
                                </Box>
                                <Box role="group" px="md" py="sm" w="full" display="block">
                                  <Link
                                    href="https://grants.balancer.community/"
                                    _groupHover={{
                                      textDecoration: 'none',
                                    }}
                                  >
                                    <Flex alignItems="center" gap="xxs">
                                      <Text
                                        fontWeight="bold"
                                        transition="all 0.2s ease-out 0.1s"
                                        _groupHover={{ color: 'font.maxContrast' }}
                                      >
                                        Get a Grant
                                      </Text>
                                      <ArrowUpRight display="inline" size={12} />
                                    </Flex>
                                    <Text
                                      fontSize="sm"
                                      variant="secondary"
                                      whiteSpace="nowrap"
                                      overflow="hidden"
                                      transition="all 0.2s ease-out 0.1s"
                                      _groupHover={{ color: 'font.maxContrast' }}
                                    >
                                      Help to get you set up
                                    </Text>
                                  </Link>
                                </Box>
                              </VStack>
                            </div>
                          </Box>
                        </Box>
                      </FadeInOnView>
                    </div>
                  </Box>
                </Box>
              </FadeInOnView>
            </Flex>
          </Flex>
        </Flex>

        <Section>
          <FadeInOnView>
            <HomeCaseStudies />
            <Divider />
          </FadeInOnView>
        </Section>
      </Box>

      <Section className="builders">
        <Box maxW="maxContent" m="0 auto" px={{ base: 'md', xl: '0' }}>
          <Box
            pb={{ base: 'md', md: 'lg' }}
            w="full"
            maxW="4xl"
            m="auto"
            textAlign={{ base: 'left', md: 'center' }}
          >
            <FadeInOnView>
              <Text pb="lg" variant="eyebrow" w="full">
                For Builders
              </Text>
              <Heading
                pb="md"
                w="full"
                as="h2"
                size="2xl"
                sx={{
                  textWrap: 'balance',
                }}
              >
                Liquidity tech for DeFi
              </Heading>
              <Text
                w="full"
                sx={{
                  textWrap: 'balance',
                }}
              >
                Build innovative AMMs and custom liquidity pools without restriction on Balancer
                smart contracts. Balancer is the one protocol with a track record of enabling true
                AMM experimentation and innovation.
              </Text>
            </FadeInOnView>
          </Box>

          <Grid
            templateRows={{ base: 'repeat(4, 1fr', md: 'repeat(3, 1fr', lg: 'repeat(2, 1fr' }}
            templateColumns={{ base: 'repeat(1, 1fr', md: 'repeat(2, 1fr', lg: 'repeat(4, 1fr' }}
            gap={4}
          >
            <Card
              variant="level2"
              gridArea={{ base: 'auto', md: '1 / 1 / 2 / 3', lg: '1 / 1 / 3 / 3' }}
            >
              <FadeInOnView>
                <Flex direction="column" justify="flex-end" h="100%">
                  <Box overflow="hidden" pb="md" rounded="lg" h="100%">
                    <ParallaxImage
                      scaleStart="100%"
                      scaleEnd="120%"
                      yStart="-10%"
                      yEnd="30%"
                      transformOrigin="bottom"
                    >
                      <Picture
                        imgName="pools"
                        altText="Liquidity pools"
                        defaultImgType="png"
                        imgPng={true}
                      />
                    </ParallaxImage>
                  </Box>
                  <Heading
                    as="h5"
                    size="h5"
                    pb="sm"
                    sx={{
                      textWrap: 'balance',
                    }}
                  >
                    Code less. Build more.
                  </Heading>
                  <Text
                    sx={{
                      textWrap: 'balance',
                    }}
                  >
                    Focus on innovation rather than low level tasks like accounting and security.
                    Simply supply custom AMM logic, and harness the full benefit of an optimized,
                    battle-tested tech stack.
                  </Text>
                </Flex>
              </FadeInOnView>
            </Card>

            <Card>
              <FadeInOnView>
                <Flex direction="column" justify="flex-end" h="100%">
                  <Box overflow="hidden" pb="md" rounded="lg" h="100%">
                    <ParallaxImage
                      scaleStart="100%"
                      scaleEnd="120%"
                      yStart="-10%"
                      yEnd="30%"
                      transformOrigin="bottom"
                    >
                      <Picture
                        imgName="feature2"
                        altText="Liquidity pools"
                        defaultImgType="jpg"
                        imgJpg={true}
                      />
                    </ParallaxImage>
                  </Box>
                  <Heading
                    as="h5"
                    size="h5"
                    pb="sm"
                    sx={{
                      textWrap: 'balance',
                    }}
                  >
                    Booststrap liquidity
                  </Heading>
                  <Text
                    sx={{
                      textWrap: 'balance',
                    }}
                  >
                    Plug into Balancer&lsquo;s veBAL incentive mechanism and grants framework to
                    bootstrap AMM liquidity.
                  </Text>
                </Flex>
              </FadeInOnView>
            </Card>

            <Card>
              <FadeInOnView>
                <Flex direction="column" justify="flex-end" h="100%">
                  <Box overflow="hidden" pb="md" rounded="lg" h="100%">
                    <ParallaxImage
                      scaleStart="100%"
                      scaleEnd="120%"
                      yStart="-10%"
                      yEnd="30%"
                      transformOrigin="bottom"
                    >
                      <Picture
                        imgName="feature3"
                        altText="Aggregator integrations like CoW, 1inch and Paraswap"
                        defaultImgType="jpg"
                        imgJpg={true}
                      />
                    </ParallaxImage>
                  </Box>
                  <Heading
                    as="h5"
                    size="h5"
                    pb="sm"
                    sx={{
                      textWrap: 'balance',
                    }}
                  >
                    Launch your product faster
                  </Heading>
                  <Text
                    sx={{
                      textWrap: 'balance',
                    }}
                  >
                    Eliminate the cold start AMM problem entirely with streamlined aggregator
                    integrations, a prebuilt UI.
                  </Text>
                </Flex>
              </FadeInOnView>
            </Card>

            <Card gridArea={{ base: 'auto', md: '3 / 1 / 4 / 3', lg: '1 / 4 / 3 / 5' }}>
              <FadeInOnView>
                <Flex direction="column" justify="flex-end" h="100%">
                  <Box overflow="hidden" pb="md" rounded="lg" h="100%">
                    <ParallaxImage
                      scaleStart="100%"
                      scaleEnd="120%"
                      yStart="-10%"
                      yEnd="30%"
                      transformOrigin="bottom"
                    >
                      <Picture
                        imgName="feature4"
                        altText="The Balancer network"
                        defaultImgType="jpg"
                        imgJpg={true}
                      />
                    </ParallaxImage>
                  </Box>
                  <Heading
                    as="h5"
                    size="h5"
                    pb="sm"
                    sx={{
                      textWrap: 'balance',
                    }}
                  >
                    Join the largest AMM network
                  </Heading>
                  <Text
                    sx={{
                      textWrap: 'balance',
                    }}
                  >
                    Unlock an extensive network of AMM expertise, audit pipelines, and partnership
                    connections.
                  </Text>
                </Flex>
              </FadeInOnView>
            </Card>
          </Grid>
        </Box>
      </Section>

      <Section className="protocols">
        <Box maxW="maxContent" m="0 auto" px={{ base: 'md', xl: '0' }}>
          <Box
            pb={{ base: 'md', md: 'lg' }}
            w="full"
            maxW="4xl"
            m="auto"
            textAlign={{ base: 'left', md: 'center' }}
          >
            <FadeInOnView>
              <Text pb="lg" variant="eyebrow" w="full">
                For Protocols
              </Text>
              <Heading
                pb="md"
                w="full"
                as="h2"
                size="2xl"
                sx={{
                  textWrap: 'balance',
                }}
              >
                Plug in to bootstrap liquidity
              </Heading>
              <Text
                sx={{
                  textWrap: 'balance',
                }}
              >
                Launch your token with confidence by plugging into the Balancer vault and ecosystem.
                Find product market fit and revenue faster with day 1 liquidity and community.
              </Text>
            </FadeInOnView>
          </Box>
        </Box>

        <Box maxW="maxContent" m="0 auto">
          <FadeInOnView>
            <ParallaxImage>
              <Picture
                imgName="bootstrap-liquidity"
                altText="Pools plugged into Balancer vault"
                defaultImgType="png"
                imgAvif={true}
                imgPng={true}
                imgAvifPortrait={true}
              />
            </ParallaxImage>
          </FadeInOnView>
        </Box>

        <Box maxW="maxContent" m="0 auto" px={{ base: 'md', xl: '0' }}>
          <FadeInOnView>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 8, md: 8, xl: '12' }} py="xl">
              <Box>
                <Heading variant="h5" as="h5" size="h5" pb="sm">
                  Get swaps on day 1
                </Heading>
                <Text>
                  Access to the Balancer vault for smart swap routing via your pools. Plus, fast
                  track inclusion to aggregator partners.
                </Text>
              </Box>
              <Box>
                <Heading variant="h5" as="h5" size="h5" pb="sm">
                  Liquidity incentives
                </Heading>
                <Text>
                  In addition to your own points / token, boost your liquidity by utilizing the
                  veBAL system for BAL and AURA incentives.
                </Text>
              </Box>
              <Box>
                <Heading variant="h5" as="h5" size="h5" pb="sm">
                  Access Balancer&lsquo;s community
                </Heading>
                <Text>
                  By building on Balancer, LPs and swappers can find and / or interact with your AMM
                  / pools via the ecosystem app.
                </Text>
              </Box>
              <Box>
                <Heading variant="h5" as="h5" size="h5" pb="sm">
                  ve8020 tokenomics
                </Heading>
                <Text>
                  Enable community staking & governance without sacrificing the liquidity of your
                  token in a specialized 80/20 pool.
                </Text>
              </Box>
            </SimpleGrid>
          </FadeInOnView>
        </Box>
      </Section>

      <Section className="activity">
        <Box maxW="maxContent" m="0 auto" px={{ base: 'md', xl: '0' }}>
          <Box pb="xl" w="full" maxW="4xl" m="auto" textAlign={{ base: 'left', md: 'center' }}>
            <Text pb="lg" variant="eyebrow" w="full">
              Ecosystem activity
            </Text>
            <Heading w="full" pb="2xl">
              Building together across networks
            </Heading>

            <ProtocolStatsSection />
          </Box>

          {/* Replace with Ecosystem Activity Chart */}
          <Box>
            <Center bg="background.level4" h="520px" w="full">
              <Text variant="secondary">[Ecosystem activity chart]</Text>
            </Center>
          </Box>
        </Box>
      </Section>
    </Box>
  )
}
